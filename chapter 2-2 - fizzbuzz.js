for (let counter = 1; counter <= 100; counter++){
    if (counter % 3 == 0 && counter % 5 == 0) {console.log(counter+" ist teilbar durch 3 UND 5");
    }
    else if (counter % 3 == 0) {console.log(counter+" ist teilbar durch 3");   
    }
    else if (counter % 5 == 0) {console.log(counter+" ist teilbar durch 5");   
    }
    else {console.log(counter);   
    }
}