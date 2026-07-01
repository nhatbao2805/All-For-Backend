SOLID là viết tắt của 5 nguyên tắc bao gồm:
- Single Responsibility Principle (SRP) - Nguyên lý Đơn Nhiệm
  - Ý nghĩa: Mỗi lớp hoặc module chỉ nên có duy nhất một lý do để thay đổi (chỉ làm một nhiệm vụ duy nhất).
  
- Open/Closed Principle (OCP) - Nguyên lý Đóng/Mở
  - Ý nghĩa: Một thành phần phần mềm nên thoải mái mở rộng (Open for extension) nhưng hạn chế sửa đổi trực tiếp vào bên trong nó (Closed for modification).
  - Đóng có nghĩa là đóng để sửa đổi.
  - Mở có nghĩa là mở rộng chức năng
  
- Liskov Substitution Principle (LSP) - Nguyên lý Thay Thế Liskov
  - Ý nghĩa: Các đối tượng của lớp con phải có khả năng thay thế hoàn hảo cho các đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình.
  
- Interface Segregation Principle (ISP) - Nguyên lý Phân Tách Giao Diện
  - Ý nghĩa: Thay vì dùng một giao diện (interface) lớn chứa nhiều phương thức, hãy chia nhỏ thành các giao diện nhỏ hơn, chuyên biệt hơn để lớp con không phải triển khai các phương thức thừa.
  
- Dependency Inversion Principle (DIP) - Nguyên lý Đảo Ngược Phụ Thuộc
  - Ý nghĩa: Các module cấp cao không nên phụ thuộc vào các module cấp thấp trực tiếp, cả hai nên phụ thuộc vào các tầng trừu tượng (Abstraction).
