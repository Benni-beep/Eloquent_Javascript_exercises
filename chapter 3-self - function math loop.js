function test(){
  const number = Math.ceil(Math.random()*10);
  if (number <=5) console.log(`${number} ist kleiner gleich 5`)
  else console.log(`${number} ist größer als 5`)
}

for (x = 1; x <= 10; x++){
  test()
}