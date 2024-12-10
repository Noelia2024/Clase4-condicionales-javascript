function puedeVerPelicula(edad, tieneAutorizacion){
//--Devuelve true si la edad es 15 o más, o si tiene autorización.---
    return edad >= 15 || tieneAutorizacion;
}
console.log(puedeVerPelicula(12, false)); //false
console.log(puedeVerPelicula(12, true)); //true
console.log(puedeVerPelicula(16, false));//true
console.log(puedeVerPelicula(18, false));//true
