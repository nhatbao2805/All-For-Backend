# Môi Trường Học Node.js - SOLID Principles & Design Patterns

Chào mừng bạn đến với không gian học tập và thực hành Node.js! Môi trường này được thiết kế tối giản, tập trung vào việc hiểu sâu các nguyên lý thiết kế hướng đối tượng (SOLID) và các mẫu thiết kế (Design Patterns) phổ biến bằng Javascript (sử dụng ES Modules).

---

## 🚀 Hướng dẫn cách chạy một tệp Node.js

Vì dự án này sử dụng JavaScript thuần túy không cần server hay cơ sở dữ liệu, việc chạy một file rất đơn giản. Bạn chỉ cần sử dụng Terminal/Command Prompt và thực hiện theo hướng dẫn sau:

### Bước 1: Mở Terminal tại thư mục dự án
Đảm bảo bạn đang đứng ở thư mục gốc của dự án (`serene-lavoisier`). Bạn có thể gõ lệnh sau để kiểm tra thư mục hiện tại:
* Trên macOS/Linux: `pwd`
* Trên Windows: `cd`

### Bước 2: Chạy file bằng lệnh `node`
Để chạy một file JavaScript bất kỳ, hãy chạy cấu trúc lệnh:
```bash
node <đường_dẫn_tới_file>
```

**Ví dụ:**
* Để chạy ví dụ vi phạm nguyên lý Single Responsibility (SRP):
  ```bash
  node src/solid/srp/bad.js
  ```
* Để chạy ví dụ áp dụng đúng nguyên lý SRP:
  ```bash
  node src/solid/srp/good.js
  ```

### Bước 3: Chạy nhanh bằng NPM Scripts (Tùy chọn)
Trong tệp `package.json` đã cấu hình sẵn một số lệnh kiểm tra nhanh cho SOLID. Bạn có thể gõ:
```bash
npm run test:srp    # Chạy cả ví dụ bad và good của SRP
npm run test:ocp    # Chạy cả ví dụ bad và good của OCP
npm run test:lsp    # Chạy cả ví dụ bad và good của LSP
npm run test:isp    # Chạy cả ví dụ bad và good của ISP
npm run test:dip    # Chạy cả ví dụ bad và good của DIP
```

---

## 📘 Tóm tắt 5 nguyên lý SOLID

SOLID là 5 nguyên lý thiết kế hệ thống giúp code dễ bảo trì, mở rộng và sửa đổi:

1. **S - Single Responsibility Principle (Nguyên lý Đơn Nhiệm)**
   * *Ý tưởng:* Mỗi lớp (class) hoặc module chỉ nên có duy nhất một lý do để thay đổi (chỉ làm một nhiệm vụ duy nhất).
2. **O - Open/Closed Principle (Nguyên lý Đóng/Mở)**
   * *Ý tưởng:* Một thành phần phần mềm nên thoải mái mở rộng (Open for extension) nhưng hạn chế sửa đổi trực tiếp vào bên trong nó (Closed for modification).
3. **L - Liskov Substitution Principle (Nguyên lý Thay Thế Liskov)**
   * *Ý tưởng:* Các đối tượng của lớp con phải có khả năng thay thế hoàn hảo cho các đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình.
4. **I - Interface Segregation Principle (Nguyên lý Phân Tách Giao Diện)**
   * *Ý tưởng:* Thay vì dùng một giao diện (interface) lớn chứa nhiều phương thức, hãy chia nhỏ thành các giao diện nhỏ hơn, chuyên biệt hơn để lớp con không phải triển khai các phương thức thừa.
5. **D - Dependency Inversion Principle (Nguyên lý Đảo Ngược Phụ Thuộc)**
   * *Ý tưởng:* Các module cấp cao không nên phụ thuộc vào các module cấp thấp trực tiếp, cả hai nên phụ thuộc vào các tầng trừu tượng (Abstraction).

Các ví dụ chi tiết được đặt trong thư mục `src/solid/`.

---

## 🎨 Lộ trình học Design Patterns (Mẫu thiết kế)

Bên cạnh SOLID, dự án đã chuẩn bị sẵn thư mục `src/patterns/` chia làm 3 nhóm chính:

1. **Creational Patterns (Nhóm Khởi Tạo):** Giúp kiểm soát và tối ưu hóa việc tạo đối tượng (vd: Singleton, Factory, Builder, Abstract Factory, Prototype).
2. **Structural Patterns (Nhóm Cấu Trúc):** Giúp thiết lập mối quan hệ giữa các lớp và đối tượng sao cho linh hoạt và hiệu quả (vd: Adapter, Decorator, Facade, Proxy).
3. **Behavioral Patterns (Nhóm Hành Vi):** Tập trung vào việc giao tiếp, phân công nhiệm vụ và trao đổi thông tin giữa các đối tượng (vd: Observer, Strategy, State, Command).

*Mỗi nhóm có một tệp `README.md` riêng giải thích chi tiết ý nghĩa và các mẫu phổ biến để bạn nghiên cứu tiếp theo.*
