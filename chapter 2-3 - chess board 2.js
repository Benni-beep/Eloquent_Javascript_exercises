let line = "";
let size = 7;
for (let x = 1; x <= size; x++) {
  for (let y = 1; y <= size; y++) {
    if ((x + y) % 2 == 0) line += "#";
    else line += " ";
  }
  line += "\n";
}
console.log(line);