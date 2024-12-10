function esConsonante(letra){
    const consonante = "n"
    if(letra === consonante /*!== "a" || letra !== "e" || letra !== "i" || letra !== "o" || letra !== "u"*/){
        return true
    }else if(letra !== "a" || letra !== "e" || letra !== "i" || letra !== "o" || letra !== "u"){
        return false
    }
    
}
console.log(esConsonante("a")); //false
console.log(esConsonante("n")); //true