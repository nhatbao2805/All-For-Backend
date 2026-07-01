// -------------------------------------------------------------------
// VI PHẠM NGUYÊN LÝ OCP (Open/Closed Principle)
// Lớp AreaCalculator này vi phạm OCP vì mỗi khi ta thêm một hình mới
// (ví dụ: Hình tam giác), ta bắt buộc phải thay đổi code bên trong
// phương thức calculateArea bằng cách thêm một nhánh `if-else` nữa.
// -------------------------------------------------------------------

class Rectangle {
  constructor(width, height) {
    this.type = "rectangle";
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.type = "circle";
    this.radius = radius;
  }
}

class AreaCalculator {
  calculateArea(shapes) {
    return shapes.reduce((totalArea, shape) => {
      if (shape.type === "rectangle") {
        return totalArea + (shape.width * shape.height);
      } else if (shape.type === "circle") {
        return totalArea + (Math.PI * Math.pow(shape.radius, 2));
      }
      // Nếu thêm Triangle, Pentagon,... ta sẽ phải vào đây sửa code -> VI PHẠM ĐÓNG (Closed)
      return totalArea;
    }, 0);
  }
}

// Chạy thử kiểm tra
console.log("=== OCP BAD EXAMPLE ===");
const shapes = [
  new Rectangle(10, 5),
  new Circle(7)
];

const calculator = new AreaCalculator();
console.log(`Tổng diện tích: ${calculator.calculateArea(shapes).toFixed(2)}`);
