class Ducktypium {
    constructor(color) {
      this.checkColor(color);
  
      this.color = color;
      this.calibrationSequence = [];
    }
  
    checkColor(color) {
      if (!["red", "blue", "yellow"].includes(color)) {
        throw new Error("Color must be red, yellow, or blue!");
      }
    }
  
    combinations(colors) {
      if (colors.includes("red") && colors.includes("blue")) return "purple";
      if (colors.includes("red") && colors.includes("yellow")) return "orange";
      if (colors.includes("yellow") && colors.includes("blue")) return "green";
    }
  
    refract(color) {
      this.checkColor(color);
  
      if (this.color === color) return color;
  
      return this.combinations([this.color, color]);
    }
  
    calibrate(nums) {
      this.calibrationSequence = nums
        .map((num) => num * 3)
        .sort((a, b) => (a < b ? -1 : 1));
    }
  }

const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]