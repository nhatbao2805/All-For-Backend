# Structural Design Patterns (Nhóm Thiết Kế Cấu Trúc)

Nhóm mẫu thiết kế **Structural** tập trung vào cách liên kết, tổ chức các lớp và đối tượng lại với nhau để tạo thành các cấu trúc lớn hơn, linh hoạt hơn nhưng vẫn đảm bảo tính hiệu quả và dễ thay đổi khi cần thiết.

## Các mẫu cấu trúc phổ biến

1. **Adapter Pattern**
   * *Ý tưởng:* Đóng vai trò như một bộ chuyển đổi, giúp hai đối tượng có giao diện (API) không tương thích có thể làm việc được với nhau.
   * *Ứng dụng thực tế:* Tích hợp thư viện thanh toán bên thứ ba vào hệ thống cũ của bạn mà không muốn sửa toàn bộ mã nguồn hiện tại.

2. **Decorator Pattern**
   * *Ý tưởng:* Cho phép gắn thêm các hành vi/nhiệm vụ mới cho một đối tượng một cách động tại thời điểm chạy (runtime) bằng cách bọc đối tượng đó trong một đối tượng đặc biệt.
   * *Ứng dụng thực tế:* Thiết lập các loại đồ uống trong quán cà phê (Cà phê sữa = Cà phê + decorator Sữa + decorator Trân châu).

3. **Facade Pattern**
   * *Ý tưởng:* Cung cấp một giao diện đơn giản, được đơn giản hóa để giao tiếp với một hệ thống con (subsystem) phức tạp gồm nhiều lớp bên trong.
   * *Ứng dụng thực tế:* Thao tác gọi điện thoại chỉ bằng một nút "Gọi", bên dưới hệ thống phải thực hiện kết nối sóng, bảo mật, truyền tín hiệu số.

4. **Proxy Pattern**
   * *Ý tưởng:* Cung cấp một đối tượng đại diện hoặc thay thế cho một đối tượng khác để kiểm soát quyền truy cập, ghi nhật ký hoặc trì hoãn việc tải tài nguyên nặng.
   * *Ứng dụng thực tế:* Caching dữ liệu, Virtual Proxy để trì hoãn load ảnh lớn, API Gateway kiểm tra quyền truy cập trước khi chuyển tiếp yêu cầu.

5. **Composite Pattern**
   * *Ý tưởng:* Cho phép bạn sắp xếp các đối tượng theo cấu trúc dạng cây để biểu diễn các phân cấp một phần-toàn bộ. Giúp khách hàng xử lý các đối tượng đơn lẻ và các nhóm đối tượng một cách đồng nhất.
   * *Ứng dụng thực tế:* Quản lý các thư mục và tệp tin trong ổ đĩa (thư mục chứa nhiều tệp tin hoặc thư mục con khác).

6. **Bridge Pattern**
   * *Ý tưởng:* Tách biệt phần trừu tượng (Abstraction) khỏi phần thực thi (Implementation) của nó, cho phép hai phần thay đổi độc lập với nhau.
   * *Ứng dụng thực tế:* Phát triển ứng dụng điều khiển thiết bị (Điều khiển TV, Quạt) trên các hệ điều hành khác nhau.

7. **Flyweight Pattern**
   * *Ý tưởng:* Giúp tiết kiệm bộ nhớ bằng cách chia sẻ trạng thái chung giữa nhiều đối tượng tương tự nhau thay vì lưu giữ mọi dữ liệu trong từng đối tượng.
   * *Ứng dụng thực tế:* Hiển thị hàng ngàn ký tự văn bản trên màn hình soạn thảo văn bản hoặc hàng triệu hạt cây trong một tựa game thế giới mở.

---

## Gợi ý thực hành của bạn
Bạn có thể tự tạo các file ví dụ trong thư mục này để thực hành:
* `adapter.js`
* `decorator.js`
* `facade.js`
* `proxy.js`

Chúc bạn học tốt!
