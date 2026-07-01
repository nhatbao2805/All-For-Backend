// -------------------------------------------------------------------
// VI PHẠM NGUYÊN LÝ SRP (Single Responsibility Principle)
// Lớp Order này đang đảm nhận quá nhiều trách nhiệm:
// 1. Quản lý thông tin đơn hàng và tính tổng tiền (Logic nghiệp vụ)
// 2. Định dạng thông tin đơn hàng để in ra (Định dạng hiển thị)
// 3. Thực hiện lưu trữ đơn hàng (Lưu trữ/Persistence)
// -------------------------------------------------------------------

class Order {
  constructor(id, items) {
    this.id = id;
    this.items = items; // Cấu trúc: [{ name: string, price: number, qty: number }]
  }

  // Trách nhiệm 1: Tính tổng giá trị đơn hàng
  calculateTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.qty), 0);
  }

  // Trách nhiệm 2: Định dạng văn bản in hóa đơn
  getInvoiceText() {
    let invoice = `HÓA ĐƠN ĐƠN HÀNG #${this.id}\n`;
    invoice += `------------------------------\n`;
    this.items.forEach(item => {
      invoice += `${item.name} x ${item.qty}: $${item.price * item.qty}\n`;
    });
    invoice += `------------------------------\n`;
    invoice += `TỔNG CỘNG: $${this.calculateTotal()}\n`;
    return invoice;
  }

  // Trách nhiệm 3: Lưu hóa đơn vào hệ thống tệp (hoặc database)
  saveToFile() {
    console.log(`[Hệ thống] Đang lưu hóa đơn vào file invoice_${this.id}.txt...`);
    // Giả lập lưu file
    console.log(`[LƯU THÀNH CÔNG] Nội dung:\n\n${this.getInvoiceText()}`);
  }
}

// Chạy thử kiểm tra
console.log("=== SRP BAD EXAMPLE ===");
const myOrder = new Order("12345", [
  { name: "Sách Node.js cơ bản", price: 15, qty: 2 },
  { name: "Chuột máy tính không dây", price: 25, qty: 1 }
]);

myOrder.saveToFile();
