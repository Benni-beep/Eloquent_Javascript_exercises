t summe = 0;
for (counter = 1; counter <= 3; counter++){
    let string = "";
    for (x = 1; x <= counter; x++){
        string += counter;
    }
    console.log(string)
    summe += parseInt(string, 10);
}
console.log("Summe =",summe)