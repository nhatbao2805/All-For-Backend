# Creational Design Patterns (Nhóm Thiết Kế Khởi Tạo)

Nhóm mẫu thiết kế **Creational** tập trung vào cách thức khởi tạo đối tượng trong hệ thống. Thay vì khởi tạo đối tượng trực tiếp bằng toán tử `new` (gây ra sự phụ thuộc cứng và khó bảo trì), các mẫu này cung cấp các cơ chế khởi tạo linh hoạt hơn, giúp tái sử dụng mã nguồn và giảm sự phụ thuộc giữa các lớp.

## Các mẫu khởi tạo phổ biến

1. **Singleton Pattern**
   * *Ý tưởng:* Đảm bảo một lớp chỉ có duy nhất một đối tượng (instance) trong toàn bộ vòng đời của ứng dụng và cung cấp một điểm truy cập toàn cục tới đối tượng đó.
   * *Ứng dụng thực tế:* Lớp cấu hình ứng dụng, Connection Pool cơ sở dữ liệu, Logger.

2. **Factory Method Pattern**
   * *Ý tưởng:* Định nghĩa một giao diện để tạo một đối tượng, nhưng để các lớp con quyết định lớp nào sẽ được khởi tạo.
   * *Ứng dụng thực tế:* Tạo các đối tượng giao dịch thanh toán khác nhau (Momo, Paypal, Stripe) dựa trên lựa chọn của người dùng.

3. **Abstract Factory Pattern**
   * *Ý tưởng:* Cung cấp một giao diện để tạo ra các họ đối tượng có liên quan hoặc phụ thuộc lẫn nhau mà không cần chỉ định lớp cụ thể của chúng.
   * *Ứng dụng thực tế:* Tạo bộ giao diện người dùng (UI component) đa nền tảng (Nút bấm và Hộp thoại trên cả Windows và macOS).

4. **Builder Pattern**
   * *Ý tưởng:* Cho phép xây dựng các đối tượng phức tạp theo từng bước một. Khác với các mẫu khởi tạo khác, Builder cho phép tạo các biểu diễn khác nhau của cùng một đối tượng bằng cùng một quy trình xây dựng.
   * *Ứng dụng thực tế:* Xây dựng đối tượng truy vấn SQL phức tạp, hoặc xây dựng cấu hình xe hơi (có/không có phanh ABS, định vị GPS, màu sắc).

5. **Prototype Pattern**
   * *Ý tưởng:* Cho phép sao chép (clone) các đối tượng có sẵn mà không làm cho mã phụ thuộc vào các lớp của chúng.
   * *Ứng dụng thực tế:* Sao chép các cấu trúc đối tượng phức tạp trong game (như tạo hàng loạt quái vật có cùng chỉ số cơ bản).

---

## Gợi ý thực hành của bạn
Bạn có thể tự tạo các file ví dụ trong thư mục này, ví dụ:
* `singleton.js`
* `factory.js`
* `builder.js`

Chúc bạn học tốt!
