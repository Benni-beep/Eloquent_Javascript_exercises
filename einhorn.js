const prefix = ["All", "B", "Bl", "Br", "C", "Chl", "Chr", "Cl", "Cr", "D", "Dr", "F", "Fl", "Fr", "G", "Gl", "Gr", "H", "J", "K", "Kl", "Kn", "Kr", "L", "M", "N", "P", "Pf", "Pfl", "Pfr", "Ph", "Phr", "Phl", "Pl", "Pr", "Ps", "Q", "R", "S", "Sk", "Sl", "Sp", "Spl", "Spr", "St", "Str", "Sch", "Schl", "Schm", "Schn", "Schr", "Schw", "T", "Tr", "Tsch", "Tw", "V", "Vl", "Vr", "W", "Wr", "X", "Y", "Z", "Zw"];

for (let index = 0; index < prefix.length; index++) {
    let base = "einhorn";
    word = prefix[index] += base;
    console.log(word);
}