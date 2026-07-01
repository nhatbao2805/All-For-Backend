
=============> Nói nôm na dễ hiểu là nếu trong trường hợp mà dùng if else nhiều thì hãy tách ra riêng cho nó mỗi function đảm nhiệm một việc và cuối cùng dùng object để tối ưu hơn

Strategy Pattern (Mẫu chiến lược) là một trong những mẫu thiết kế thuộc nhóm Behavioral Pattern (Mẫu hành vi).

Hiểu một cách đơn giản nhất: Strategy Pattern giúp bạn tách phần xử lý logic (thuật toán) ra khỏi đối tượng ban đầu, biến mỗi logic thành một "chiến lược" riêng biệt để có thể dễ dàng thay đổi qua lại khi chạy chương trình (runtime).

💡 Ý nghĩa và Lý do cần sử dụng
Hãy tưởng tượng bạn đang viết một ứng dụng Tính tiền cho cửa hàng. Cửa hàng có nhiều chương trình khuyến mãi:

Ngày thường: Không giảm giá.

Ngày Black Friday: Giảm giá 50%.

Khách hàng VIP: Giảm giá 20%.

Nếu không dùng Strategy Pattern (Cách thông thường):
Bạn sẽ dùng một loạt lệnh if-else hoặc switch-case trong hàm tính tiền:

Plaintext
Nếu là Black Friday -> Giá * 0.5
Nếu là VIP          -> Giá * 0.8
Ngược lại           -> Giá gốc
Vấn đề: Khi cửa hàng thêm khuyến mãi mới (ví dụ: Tết Nguyên Đán giảm 30%), bạn buộc phải nhảy vào sửa lại đoạn code cũ. Điều này vi phạm nguyên tắc Open/Closed Principle (Mở rộng để phát triển, đóng để chỉnh sửa) trong SOLID và rất dễ làm hỏng code đang chạy ổn định.

Khi dùng Strategy Pattern:
Bạn tách mỗi loại giảm giá thành một lớp (Class) riêng biệt gọi là "Chiến lược" (Strategy). Khi tính tiền, bạn chỉ cần "gắn" chiến lược tương ứng vào đối tượng thanh toán là xong.

🛠️ Cấu trúc cốt lõi của Strategy Pattern
Mẫu này gồm 3 thành phần chính:

Strategy (Interface): Định nghĩa giao diện chung cho tất cả các thuật toán/chiến lược.

Concrete Strategy (Các Class cụ thể): Các lớp hiện thực hóa (implement) giao diện trên, chứa thuật toán cụ thể (Ví dụ: BlackFridayDiscount, VipDiscount).

Context (Bối cảnh): Lớp sử dụng chiến lược. Nó giữ một tham chiếu đến đối tượng Strategy và sẽ gọi hàm xử lý của Strategy đó khi cần.