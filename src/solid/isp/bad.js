// -------------------------------------------------------------------
// VI PHẠM NGUYÊN LÝ ISP (Interface Segregation Principle)
// Trong JavaScript không có từ khóa `interface` như Java/C#, nhưng ta 
// có thể hiểu qua việc bắt buộc một Class phải triển khai các phương thức
// mà nó không cần thiết hoặc không sử dụng tới.
// Ở đây, lớp SmartDevice bắt buộc tất cả thiết bị phải hỗ trợ Print, Scan và Fax.
// -------------------------------------------------------------------

class SmartDevice {
  print(document) {
    throw new Error("Chưa triển khai hàm print");
  }
  scan(document) {
    throw new Error("Chưa triển khai hàm scan");
  }
  fax(document) {
    throw new Error("Chưa triển khai hàm fax");
  }
}

// 1. Máy in đa năng (All-in-one): Hoạt động tốt vì hỗ trợ tất cả chức năng
class AllInOnePrinter extends SmartDevice {
  print(document) {
    console.log(`[AllInOne] Đang in: ${document}`);
  }
  scan(document) {
    console.log(`[AllInOne] Đang quét: ${document}`);
  }
  fax(document) {
    console.log(`[AllInOne] Đang gửi fax: ${document}`);
  }
}

// 2. Máy in đời cũ (OldPrinter): Chỉ biết in, KHÔNG thể quét hay gửi fax.
// Nhưng vì kế thừa SmartDevice, nó buộc phải khai báo hàm scan và fax.
class OldPrinter extends SmartDevice {
  print(document) {
    console.log(`[OldPrinter] Đang in: ${document}`);
  }

  scan(document) {
    // Ép buộc phải định nghĩa mặc dù không hỗ trợ
    throw new Error("❌ Lỗi: Thiết bị này không hỗ trợ chức năng Scan!");
  }

  fax(document) {
    // Ép buộc phải định nghĩa mặc dù không hỗ trợ
    throw new Error("❌ Lỗi: Thiết bị này không hỗ trợ chức năng Fax!");
  }
}

console.log("=== ISP BAD EXAMPLE ===");

const myOldPrinter = new OldPrinter();
myOldPrinter.print("Tài liệu học SOLID");

try {
  myOldPrinter.scan("Tài liệu học SOLID");
} catch (error) {
  console.log(`Lỗi xảy ra đúng như dự đoán: ${error.message}`);
}
