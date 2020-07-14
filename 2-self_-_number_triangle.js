let string = ""
for (n = 1; n <= 9; n++){
    for(x = 1; x <= n; x++){
        string += `${n}`
    }
    string += "\n"
}
console.log(string)