function esVocal(letra){
    
    if(letra === "a" ||letra === "e" ||letra === "i" ||letra ==="o" ||letra === "u" ){
    return true
    }else if (letra !== "a"|| "e" || "i" || "o" || "u"){
        return false
    }

}

console.log(esVocal("a")); //true
console.log(esVocal("n")); //false
console.log(esVocal ("E")) //VER ESTO!
