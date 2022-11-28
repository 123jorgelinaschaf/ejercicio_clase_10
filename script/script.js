//ejercicio 1
let nombre = "Programacion" + "facíl ";
let saludo = "Les doy la bienvenida a ";
let año = "año 2022";
let fraseCompleta = saludo + nombre + año;

console.log(fraseCompleta);

//ejercicio 2

let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";

console.log(frase);

//ejercicio 3
let numerosIngresados = "Los numeros ingresados fueron "
let numeroString1 = "10 ";
let numeroString2 = "20 ";
let numeroString3 = "30 ";

let concatenaNumeros = numerosIngresados + numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

//ejercicio 4
let Nombre = prompt("Cual es tu nombre?")
let age = prompt("Cual es tu edad?");
console.warn(Nombre + age);
let sexo = prompt("Cual es tu sexo?")

if (age >= 18) {
    alert("Puedes entrar, eres mayor de edad.");
} else {
    alert("No puedes entrar, eres menor de edad.");

}
