//EJERCICIO 1

class persona{
    nombre
    posición
    vida
    daño
    experiencia

    constructor(nombre,posición,vida,daño,experiencia){
        this.nombre = nombre;
        this.posición = posición;
        this.vida = vida;
        this.daño = daño;
        this.experiencia = experiencia;
    }

}

const heroe = new persona('heroe','00',100,5,0);

console.log(heroe);