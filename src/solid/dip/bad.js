// -------------------------------------------------------------------
// VI PHẠM NGUYÊN LÝ DIP (Dependency Inversion Principle)
// Module cấp cao (NotificationService) đang phụ thuộc trực tiếp vào
// Module cấp thấp (GmailSender). Khi muốn chuyển sang gửi bằng SMS,
// ta bắt buộc phải vào sửa code của NotificationService.
// -------------------------------------------------------------------

// Module cấp thấp (Low-level module)
class GmailSender {
  sendEmail(message) {
    console.log(`[Gmail] Gửi email nội dung: "${message}"`);
  }
}

// Module cấp cao (High-level module)
class NotificationService {
  constructor() {
    // Khởi tạo trực tiếp (Tạo sự phụ thuộc cứng - Tight Coupling)
    this.gmailSender = new GmailSender();
  }

  sendNotification(message) {
    this.gmailSender.sendEmail(message);
  }
}

console.log("=== DIP BAD EXAMPLE ===");
const notifier = new NotificationService();
notifier.sendNotification("Xin chào! Bạn có một thông báo mới từ hệ thống.");
