let Board = "", size = 9
for (let x = 1, y = 1; y <= size ; x++){
    if (y % 2 != 0){//alle ungeraden Zeilen
        if (x % 2 != 0) Board += " ";
        if (x % 2 == 0) Board += "#";
        if (x % size == 0) Board += "\n", y++;
    }
    else {// alle geraden Zeilen
        if (size % 2 == 0){//wenn "size" gerade
            if (x % 2 != 0) Board += "#";
            if (x % 2 == 0) Board += " ";
            if (x % size == 0) Board += "\n", y++;
        }
        else {// wenn "size" ungerade
          if (x % 2 != 0) Board += " ";
            if (x % 2 == 0) Board += "#";
            if (x % size == 0) Board += "\n", y++;
        }        
    }
}
console.log(Board);