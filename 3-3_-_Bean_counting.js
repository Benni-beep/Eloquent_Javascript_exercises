function countChar (text, letter = "B"){
    let counter = 0;
    for (x = 0; x < text.length; x++){
    if (text[x] == letter) counter++;
  }
  console.log(`Der String "${text}" enthält ${counter}mal das Zeichen "${letter}".`)
}

countChar("9839ff", "9")