function esHoraValida(hora){
    const dia = "24:00"
    if(hora <= dia){
        return true
    }else{
        return false
    }
}

console.log(esHoraValida("12:23"));//true
console.log(esHoraValida("12:65")); //false
console.log(esHoraValida("28:05")); //false
console.log(esHoraValida("00:00")); //true