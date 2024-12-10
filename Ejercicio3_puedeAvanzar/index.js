function puedeAvanzar(colorSemaforo){
    const puedePasar = "verde"
    const noPuedePasar = "amarillo, rojo"
    const error = "lila"
    const mensaje = "Error: color de semaforo invalido"
    if(colorSemaforo === puedePasar){
        return true
    }else if(colorSemaforo === error){
        return mensaje;
    } else { colorSemaforo === puedePasar
        return false
        
    }

}

console.log(puedeAvanzar("verde")); //true
console.log(puedeAvanzar("amarillo")); //false
console.log(puedeAvanzar("rojo")); //false
console.log(puedeAvanzar("lila")); //"Error: color de semaforo invalido"