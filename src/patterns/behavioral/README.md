# Behavioral Design Patterns (Nhóm Thiết Kế Hành Vi)

Nhóm mẫu thiết kế **Behavioral** tập trung vào việc giao tiếp, tương tác và phân chia trách nhiệm giữa các đối tượng. Các mẫu này giúp luồng xử lý của hệ thống trở nên rõ ràng hơn, giảm sự liên kết chặt chẽ (tight coupling) giữa người gửi và người nhận thông tin.

## Các mẫu hành vi phổ biến

1. **Observer Pattern**
   * *Ý tưởng:* Định nghĩa mối quan hệ một-nhiều giữa các đối tượng sao cho khi một đối tượng thay đổi trạng thái, tất cả các đối tượng phụ thuộc của nó đều được thông báo và cập nhật tự động.
   * *Ứng dụng thực tế:* Xử lý sự kiện (Event-driven) như nhấn nút trên web, nhận thông báo đẩy khi có bài viết mới, hệ thống chat thời gian thực.

2. **Strategy Pattern**
   * *Ý tưởng:* Định nghĩa một tập hợp các thuật toán, đóng gói từng thuật toán lại và làm cho chúng có thể thay thế lẫn nhau tại thời điểm chạy (runtime).
   * *Ứng dụng thực tế:* Tính toán phí giao hàng dựa trên các đơn vị vận chuyển khác nhau (Giao Hàng Nhanh, ViettelPost, GrabExpress), hoặc các chiến lược giảm giá theo mùa.

3. **State Pattern**
   * *Ý tưởng:* Cho phép một đối tượng thay đổi hành vi của nó khi trạng thái nội bộ của nó thay đổi. Đối tượng sẽ trông giống như thay đổi lớp của nó.
   * *Ứng dụng thực tế:* Quản lý trạng thái đơn hàng (Mới tạo -> Đang giao -> Đã giao -> Đã hủy), hoặc nhân vật trong game (Đang đứng -> Đang chạy -> Đang nhảy).

4. **Command Pattern**
   * *Ý tưởng:* Chuyển đổi một yêu cầu thành một đối tượng độc lập chứa tất cả thông tin về yêu cầu đó. Việc chuyển đổi này cho phép bạn tham số hóa các phương thức với các yêu cầu khác nhau, trì hoãn hoặc xếp hàng thực hiện yêu cầu và hỗ trợ các hoạt động không thể hoàn tác (undo/redo).
   * *Ứng dụng thực tế:* Chức năng Undo/Redo trong các trình soạn thảo văn bản, hệ thống hàng đợi công việc (job queue).

5. **Iterator Pattern**
   * *Ý tưởng:* Cung cấp một cách để truy cập tuần tự vào các phần tử của một đối tượng tập hợp (như List, Set) mà không để lộ biểu diễn cơ sở của nó.
   * *Ứng dụng thực tế:* Duyệt các phần tử bằng vòng lặp `for...of` hoặc hàm `next()` trong JavaScript Generators.

6. **Chain of Responsibility Pattern**
   * *Ý tưởng:* Cho phép chuyển các yêu cầu dọc theo một chuỗi các trình xử lý (handler). Khi nhận được yêu cầu, mỗi trình xử lý sẽ quyết định xử lý yêu cầu đó hoặc chuyển nó cho trình xử lý tiếp theo trong chuỗi.
   * *Ứng dụng thực tế:* Hệ thống lọc Middleware của ExpressJS, quy trình duyệt đơn xin nghỉ phép (Nhân viên -> Trưởng phòng -> Giám đốc).

7. **Mediator Pattern**
   * *Ý tưởng:* Giảm bớt sự phụ thuộc lẫn nhau hỗn loạn giữa các đối tượng bằng cách buộc chúng giao tiếp gián tiếp thông qua một đối tượng trung gian (Mediator).
   * *Ứng dụng thực tế:* Tháp điều khiển không lưu điều phối cất hạ cánh cho các máy bay, hoặc phòng chat trung gian kết nối các user.

---

## Gợi ý thực hành của bạn
Bạn có thể tự tạo các file ví dụ trong thư mục này để thực hành:
* `observer.js`
* `strategy.js`
* `state.js`

Chúc bạn học tốt!
