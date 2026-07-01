// -------------------------------------------------------------------
// TUÂN THỦ NGUYÊN LÝ SRP (Single Responsibility Principle)
// Chúng ta tách biệt 3 trách nhiệm thành 3 lớp chuyên biệt:
// 1. Order: Chỉ chịu trách nhiệm quản lý thông tin đơn hàng
// 2. InvoicePrinter: Chỉ chịu trách nhiệm định dạng và in hóa đơn
// 3. OrderRepository: Chỉ chịu trách nhiệm lưu trữ dữ liệu
// -------------------------------------------------------------------

// 1. Lớp quản lý dữ liệu đơn hàng (Chỉ chứa Logic nghiệp vụ)
class Order {
  constructor(id, items) {
    this.id = id;
    this.items = items;
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.qty), 0);
  }
}

// 2. Lớp chịu trách nhiệm định dạng hiển thị hóa đơn (Presentation)
class InvoicePrinter {
  static print(order) {
    let invoice = `HÓA ĐƠN ĐƠN HÀNG #${order.id}\n`;
    invoice += `------------------------------\n`;
    order.items.forEach(item => {
      invoice += `${item.name} x ${item.qty}: $${item.price * item.qty}\n`;
    });
    invoice += `------------------------------\n`;
    invoice += `TỔNG CỘNG: $${order.calculateTotal()}\n`;
    return invoice;
  }
}

// 3. Lớp chịu trách nhiệm lưu trữ (Persistence)
class OrderRepository {
  static save(order) {
    console.log(`[Hệ thống] Đang lưu hóa đơn vào database/file cho đơn hàng #${order.id}...`);
    // Lấy nội dung cần lưu thông qua InvoicePrinter
    const content = InvoicePrinter.print(order);
    console.log(`[LƯU THÀNH CÔNG] Nội dung:\n\n${content}`);
  }
}

// Chạy thử kiểm tra
console.log("=== SRP GOOD EXAMPLE ===");
const myOrder = new Order("12345", [
  { name: "Sách Node.js cơ bản", price: 15, qty: 2 },
  { name: "Chuột máy tính không dây", price: 25, qty: 1 }
]);

// Mỗi đối tượng làm đúng một việc:
// - Order tính toán dữ liệu
// - InvoicePrinter định dạng văn bản
// - OrderRepository thực hiện lưu trữ
OrderRepository.save(myOrder);
