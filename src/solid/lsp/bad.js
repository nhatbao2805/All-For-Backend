// -------------------------------------------------------------------
// VI PHẠM NGUYÊN LÝ LSP (Liskov Substitution Principle)
// Ví dụ kinh điển về Hình chữ nhật (Rectangle) và Hình vuông (Square).
// Trong toán học, Hình vuông là một Hình chữ nhật. Nhưng trong OOP,
// nếu cho Square kế thừa Rectangle, ta sẽ phá vỡ hành vi mong đợi của lớp cha.
// Lớp cha mong muốn thay đổi chiều rộng KHÔNG ảnh hưởng chiều cao,
// nhưng Square lại bắt buộc cả hai chiều phải bằng nhau.
// -------------------------------------------------------------------

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Square kế thừa Rectangle
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  // Ghi đè phương thức làm thay đổi cả hai thuộc tính
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

// Một hàm kiểm thử sử dụng đối tượng Rectangle
function processRectangle(rect) {
  rect.setWidth(10);
  rect.setHeight(5);

  console.log(`Kiểm tra chiều rộng thiết lập: ${rect.width} (Kỳ vọng: 10)`);
  console.log(`Kiểm tra chiều cao thiết lập: ${rect.height} (Kỳ vọng: 5)`);
  console.log(`Diện tích tính toán: ${rect.getArea()} (Kỳ vọng: 50)`);

  if (rect.getArea() !== 50) {
    console.error("❌ THẤT BẠI: Hành vi của đối tượng đã bị sai lệch khi thay thế bằng lớp con!");
  } else {
    console.log("✅ THÀNH CÔNG: Lớp hoạt động đúng như mong đợi.");
  }
}

console.log("=== LSP BAD EXAMPLE ===");

console.log("\n--- Chạy thử với lớp cha Rectangle ---");
const myRectangle = new Rectangle(2, 3);
processRectangle(myRectangle);

console.log("\n--- Chạy thử với lớp con Square (Thay thế cho Rectangle) ---");
const mySquare = new Square(5);
processRectangle(mySquare); // Vi phạm LSP vì hàm mong đợi diện tích = 50 nhưng nhận về 25!
