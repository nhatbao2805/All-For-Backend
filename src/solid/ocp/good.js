// -------------------------------------------------------------------
// TUÂN THỦ NGUYÊN LÝ OCP (Open/Closed Principle)
// Chúng ta thiết kế lớp Base Shape (hoặc dùng tính đa hình của JS) 
// để mỗi hình tự biết cách tính diện tích của chính nó.
// Lớp AreaCalculator chỉ việc duyệt qua và gọi hàm area().
// Khi cần thêm hình mới, ta chỉ cần tạo class mới mà KHÔNG cần sửa AreaCalculator.
// -------------------------------------------------------------------

// Lớp cơ sở (Interface/Abstract Class mô phỏng)
class Shape {
  area() {
    throw new Error("Phương thức area() phải được triển khai!");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// -------------------------------------------------------------------
// Thêm một hình mới (Hình tam giác) cực kỳ dễ dàng mà KHÔNG động vào
// code cũ của AreaCalculator hay các hình khác.
// -------------------------------------------------------------------
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}

// Lớp tính toán: Đóng với việc chỉnh sửa bên trong (Closed for modification)
// nhưng Mở với việc thêm các hình mới (Open for extension)
class AreaCalculator {
  calculateArea(shapes) {
    return shapes.reduce((totalArea, shape) => {
      // Đảm bảo đối tượng là một hình hợp lệ có hàm area()
      if (shape instanceof Shape) {
        return totalArea + shape.area();
      }
      return totalArea;
    }, 0);
  }
}

// Chạy thử kiểm tra
console.log("=== OCP GOOD EXAMPLE ===");
const shapes = [
  new Rectangle(10, 5),
  new Circle(7),
  new Triangle(10, 5) // Dễ dàng thêm hình tam giác vào mảng tính toán
];

const calculator = new AreaCalculator();
console.log(`Tổng diện tích: ${calculator.calculateArea(shapes).toFixed(2)}`);
