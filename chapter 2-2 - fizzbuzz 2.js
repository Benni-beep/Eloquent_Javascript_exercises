for (let x = 1; x <= 100; x++){
    output = `${x}`
    if (x % 3 == 0) output += " ist teilbar durch 3"
    if (x % 3 == 0 && x % 5 == 0) output += " und"
    if (x % 5 == 0) output += " ist teilbar durch 5"
    console.log(output)
}