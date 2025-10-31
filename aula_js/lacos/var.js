var escopoGlobal = "fora do if";

if (true) {
    var escopoLocal = "dentro do if";
    console.log(escopoLocal);
}

console.log(escopoGlobal);
console.log(escopoLocal);