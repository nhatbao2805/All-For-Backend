Facade Pattern (Mẫu mặt tiền) là một mẫu thiết kế thuộc nhóm Structural Pattern (Mẫu cấu trúc).

Từ "Facade" trong tiếng Pháp có nghĩa là "Mặt tiền" của một tòa nhà. Hiểu một cách đơn giản nhất: Facade Pattern cung cấp một giao diện (interface) duy nhất, đơn giản để giao tiếp với một hệ thống phức tạp gồm nhiều lớp (class) và logic chằng chịt bên dưới.

Nó giúp người gọi code (Client) không cần phải biết bên trong hệ thống con (Subsystems) hoạt động rắc rối ra sao, mà chỉ cần tương tác qua một "mặt tiền" thân thiện.

💡 Ý nghĩa và Lý do cần sử dụng
Hãy tưởng tượng bạn thao tác bật máy tính. Bạn chỉ cần nhấn một nút nguồn duy nhất (Facade). Bạn không cần phải tự tay kích hoạt CPU, cấp điện cho RAM, khởi động quạt tản nhiệt, hay nạp hệ điều hành từ ổ cứng (Subsystems). Cái nút nguồn đã làm "mặt tiền" che giấu mọi sự phức tạp đó đi.

Vấn đề khi không dùng Facade:
Nếu bạn đang viết một tính năng "Đặt hàng", Client có thể phải tự gọi một loạt các dịch vụ: kiểm tra kho, tính tiền, trừ tiền thẻ tín dụng, tạo hóa đơn, gửi email xác nhận,... Điều này làm cho code của Client trở nên cồng kềnh và bị dính chặt (tight coupling) với hàng tá lớp khác nhau.

Khi dùng Facade:
Bạn tạo ra một lớp OrderFacade. Lớp này sẽ cung cấp một hàm duy nhất là placeOrder(). Khi Client gọi hàm này, Facade sẽ tự động đi điều phối tất cả các hệ thống con bên dưới.

🎨 Ứng dụng Facade trong Thực tế (Frontend)
Mẫu thiết kế này không chỉ dùng trong kiến trúc hệ thống backend mà còn cực kỳ hữu ích khi xây dựng giao diện người dùng (UI).

Ví dụ, khi bạn phát triển một dự án bằng React.js, một UI component thường chỉ nên tập trung vào việc hiển thị giao diện (render ra các thẻ HTML được căn chỉnh, làm đẹp bằng các utility class của Tailwind CSS). Nếu bạn nhồi nhét logic gọi API, quản lý trạng thái đang tải (loading), và xử lý lỗi trực tiếp vào trong component đó, code sẽ rất rối mắt.

Thay vào đó, bạn có thể áp dụng Facade bằng cách viết một Custom Hook (ví dụ: useProductList()). Custom hook này sẽ đứng ra làm "mặt tiền" bao bọc toàn bộ logic phức tạp (fetch data, useEffect, useState). Component UI của bạn bây giờ chỉ cần gọi hook này ra để lấy dữ liệu tĩnh và tập trung hoàn toàn vào việc render các class của Tailwind.

⚖️ Ưu điểm và Nhược điểm
Ưu điểm 👍
Che giấu sự phức tạp: Giúp code ở phía Client vô cùng sạch sẽ và dễ đọc.

Giảm sự phụ thuộc (Loose Coupling): Client chỉ phụ thuộc vào Facade chứ không phụ thuộc vào hàng chục class của hệ thống con. Nếu sau này hệ thống con có thay đổi, bạn chỉ cần sửa code bên trong Facade, code của Client vẫn được giữ nguyên.

Phân chia rõ ràng (Separation of Concerns): Tách biệt rõ ràng tầng Giao diện/Sử dụng và tầng Xử lý logic nghiệp vụ.

Nhược điểm 👎
Nguy cơ trở thành "God Object": Nếu không thiết kế khéo léo và nhồi nhét quá nhiều trách nhiệm vào lớp Facade, nó có thể phình to thành một lớp biết và quản lý mọi thứ (God Object), dẫn đến khó bảo trì về sau. (Để khắc phục, bạn có thể tạo ra nhiều Facade nhỏ giáp mặt với từng nhóm tính năng riêng biệt).