// -------------------------------------------------------------------
// TUÂN THỦ NGUYÊN LÝ DIP (Dependency Inversion Principle)
// Cả Module cấp cao và Module cấp thấp đều phụ thuộc vào tầng trừu tượng
// (ở đây là một interface/contract có hàm `send(message)`).
// Chúng ta truyền đối tượng gửi tin nhắn từ ngoài vào (Dependency Injection).
// -------------------------------------------------------------------

// Lớp trừu tượng định nghĩa hợp đồng gửi tin nhắn
class MessageSender {
  send(message) {
    throw new Error("Hàm send phải được triển khai!");
  }
}

// Module cấp thấp thứ nhất: gửi qua Gmail
class GmailSender extends MessageSender {
  send(message) {
    console.log(`[Gmail] Gửi email nội dung: "${message}"`);
  }
}

// Module cấp thấp thứ hai: gửi qua SMS (Mới)
class SmsSender extends MessageSender {
  send(message) {
    console.log(`[SMS] Gửi tin nhắn SMS nội dung: "${message}"`);
  }
}

// Module cấp thấp thứ ba: gửi qua Telegram (Mới)
class TelegramSender extends MessageSender {
  send(message) {
    console.log(`[Telegram] Gửi tin nhắn Telegram nội dung: "${message}"`);
  }
}

// Module cấp cao: Không quan tâm gửi bằng phương thức nào,
// chỉ quan tâm đối tượng nhận vào có tuân thủ đúng class MessageSender hay không.
class NotificationService {
  constructor(messageSender) {
    // Đảm bảo tính lỏng lẻo (Loose Coupling) thông qua Constructor Injection
    this.messageSender = messageSender;
  }

  sendNotification(message) {
    this.messageSender.send(message);
  }
}

console.log("=== DIP GOOD EXAMPLE ===");

// 1. Gửi qua Gmail
const emailSender = new GmailSender();
const notifier1 = new NotificationService(emailSender);
notifier1.sendNotification("Xin chào qua Email!");

// 2. Dễ dàng đổi sang SMS mà không cần thay đổi bất kỳ code nào của NotificationService
const smsSender = new SmsSender();
const notifier2 = new NotificationService(smsSender);
notifier2.sendNotification("Xin chào qua SMS!");

// 3. Dễ dàng đổi sang Telegram
const telegramSender = new TelegramSender();
const notifier3 = new NotificationService(telegramSender);
notifier3.sendNotification("Xin chào qua Telegram!");

console.log("✅ Module cấp cao và cấp thấp đã được tách rời hoàn toàn và phụ thuộc vào Abstraction.");
