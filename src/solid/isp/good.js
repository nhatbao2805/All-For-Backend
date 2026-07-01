// -------------------------------------------------------------------
// TUÂN THỦ NGUYÊN LÝ ISP (Interface Segregation Principle)
// Giải pháp: Chia nhỏ giao diện/lớp cơ sở thành các lớp đơn nhiệm nhỏ hơn.
// Mỗi thiết bị chỉ kế thừa hoặc triển khai đúng những tính năng mình hỗ trợ.
// Tránh việc bắt buộc một lớp phải chứa các phương thức "rác" không dùng.
// -------------------------------------------------------------------

// Định nghĩa các lớp hành vi riêng biệt (Interface chuyên biệt)
class Printer {
  print(document) {
    throw new Error("Hàm print phải được triển khai!");
  }
}

class Scanner {
  scan(document) {
    throw new Error("Hàm scan phải được triển khai!");
  }
}

class Fax {
  fax(document) {
    throw new Error("Hàm fax phải được triển khai!");
  }
}

// 1. Máy in đời cũ chỉ kế thừa Printer
class OldPrinter extends Printer {
  print(document) {
    console.log(`[OldPrinter] Đang in tài liệu: ${document}`);
  }
}

// 2. Máy in đa năng kế thừa và triển khai tất cả (Sử dụng Composition / Hợp thành)
class AllInOnePrinter {
  constructor() {
    this.printer = new SimplePrinter();
    this.scanner = new SimpleScanner();
    this.faxMachine = new SimpleFax();
  }

  print(document) {
    this.printer.print(document);
  }

  scan(document) {
    this.scanner.scan(document);
  }

  fax(document) {
    this.faxMachine.fax(document);
  }
}

// Các class phụ trợ thực thi nhiệm vụ chuyên biệt
class SimplePrinter extends Printer {
  print(document) {
    console.log(`[Hệ thống in] Đang in: ${document}`);
  }
}

class SimpleScanner extends Scanner {
  scan(document) {
    console.log(`[Hệ thống quét] Đang quét: ${document}`);
  }
}

class SimpleFax extends Fax {
  fax(document) {
    console.log(`[Hệ thống Fax] Đang gửi: ${document}`);
  }
}

console.log("=== ISP GOOD EXAMPLE ===");

const myOldPrinter = new OldPrinter();
myOldPrinter.print("Tài liệu học SOLID");
// myOldPrinter.scan() -> Lỗi biên dịch/runtime không xảy ra nữa vì phương thức scan hoàn toàn không tồn tại trong OldPrinter. 

const superPrinter = new AllInOnePrinter();
superPrinter.print("Báo cáo tài chính");
superPrinter.scan("Hóa đơn VAT");
superPrinter.fax("Hợp đồng");

console.log("✅ Các thiết bị chỉ đảm nhận các phương thức thực sự cần thiết, không bị ép buộc kế thừa hành vi dư thừa.");
