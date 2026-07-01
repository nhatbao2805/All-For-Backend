Trong Observer Pattern, khi một Subject (Đối tượng bị quan sát) có sự thay đổi, nó cần thông báo cho các Observers (Người quan sát).

Cách mà Subject truyền dữ liệu chi tiết về sự thay đổi đó cho các Observers được chia làm 2 mô hình chính: Push Model (Mô hình Đẩy) và Pull Model (Mô hình Kéo).

Dưới đây là cách phân biệt chi tiết:

1. Push Model (Mô hình Đẩy)
Trong mô hình này, Subject đóng vai trò chủ động. Khi có thay đổi, Subject sẽ "đẩy" (push) toàn bộ dữ liệu mới hoặc trạng thái hiện tại của nó trực tiếp cho Observer thông qua tham số của hàm update().

📺 Ví dụ thực tế: Kênh YouTube có video mới. Thông báo gửi về điện thoại của bạn có chứa sẵn: Tên video, Hình thu nhỏ (thumbnail), Thời lượng video, và Lời mô tả ngắn. Bạn không cần làm gì thêm cũng biết nội dung cơ bản là gì.

👍 Ưu điểm:

Observer nhận được dữ liệu ngay lập tức.

Subject và Observer ít bị phụ thuộc (Coupling) vào nhau hơn vì Observer không cần phải gọi ngược lại Subject để lấy dữ liệu.

👎 Nhược điểm:

Subject có thể gửi rất nhiều dữ liệu mà Observer không thực sự cần tới, gây lãng phí tài nguyên.

Nếu dữ liệu thay đổi cấu trúc, hàm update() của tất cả Observers đều phải sửa lại.

2. Pull Model (Mô hình Kéo)
Trong mô hình này, Observer đóng vai trò chủ động trong việc lấy dữ liệu. Khi có thay đổi, Subject chỉ gửi một thông báo rất ngắn gọn: "Trạng thái của tôi vừa thay đổi nhé!" (không kèm theo dữ liệu). Sau đó, Observer sẽ tự gọi các hàm getter (ví dụ: getState()) của Subject để "kéo" (pull) đúng những dữ liệu mà nó cần.

📺 Ví dụ thực tế: Cửa hàng tiện lợi treo biển "Đã có hàng mới về". Họ không nói rõ là hàng gì. Bạn (Observer) phải tự bước vào cửa hàng (Subject), đi xem từng kệ đồ để xem mặt hàng bạn cần mua đã có chưa.

👍 Ưu điểm:

Không gửi dữ liệu thừa. Observer A có thể lấy dữ liệu X, Observer B có thể lấy dữ liệu Y tùy ý.

Dễ dàng mở rộng Subject. Khi Subject có thêm dữ liệu mới, hàm update() không bị ảnh hưởng.

👎 Nhược điểm:

Observer bắt buộc phải biết rõ cấu trúc của Subject (phải gọi hàm nào để lấy dữ liệu gì), làm tăng sự phụ thuộc (Tight Coupling) giữa hai bên.

Tốn thêm thao tác: Observer nhận thông báo xong phải mất công gọi ngược lại Subject.