// -------------------------------------------------------------------
// TUÂN THỦ NGUYÊN LÝ LSP (Liskov Substitution Principle)
// Giải pháp: Không cho Square kế thừa trực tiếp từ Rectangle nếu chúng
// có các ràng buộc (invariants) khác nhau về thuộc tính kích thước.
// Thay vào đó, cả hai nên kế thừa từ một Interface/Class cha chung là Shape,
// chỉ yêu cầu phương thức tính diện tích `getArea()`.
// -------------------------------------------------------------------

class Shape {
  getArea() {
    throw new Error("Hàm getArea() phải được triển khai!");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
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

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  setSize(size) {
    this.size = size;
  }

  getArea() {
    return this.size * this.size;
  }
}

// Hàm kiểm thử bây giờ chỉ làm việc với giao thức chung (Shape -> getArea)
function printArea(shape) {
  console.log(`Diện tích của hình: ${shape.getArea()}`);
}

console.log("=== LSP GOOD EXAMPLE ===");

const rect = new Rectangle(10, 5);
const square = new Square(5);

// Cả Rectangle và Square đều có thể thay thế hoàn hảo cho Shape
printArea(rect);      // Đầu ra: 50
printArea(square);    // Đầu ra: 25

console.log("✅ Cả hai lớp con đều thay thế hoàn hảo cho lớp cha Shape mà không làm hỏng logic nghiệp vụ.");
