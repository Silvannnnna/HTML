console.log("Hola mundo");

let alumno = {
    nombre: "Silvanna",
    edad: 20,
    imprime() {
        console.log(this.nombre + " "+ this.edad);
    }
}
alumno.imprime();