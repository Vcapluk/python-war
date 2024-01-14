const radius = 60;
const circumference = Math.PI * 2 * radius;
const step = 1 / (2 * Math.PI) * circumference;
let x, y;
for (let a = 0; a <= 1; a += step) {
  x = radius * Math.sin(a);
  y = radius * Math.cos(a);

  console.log(`x: ${x}, y: ${y}`);
}
