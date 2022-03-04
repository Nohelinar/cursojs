// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

/*
function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt("Cuál es el año actual?"));
const anioNacimiento = Number(prompt("En qué año naciste?"));

console.log('Tenés ' + calcularEdad(anioActual, anioNacimiento) + ' años');
*/

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

/*
function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario anual es ' + calcularSalarioAnual(salarioMensual));

const salarioAnual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnual));

*/
/// SCOPE

//Variable hoisting -> izar
//console.log(hola); //Falla porque no está definida

//let mensaje = 'Hola, mundo';
//console.log(mensaje); //No falla, pero muestra undefined... por qué?

//console.log(mensaje);


//Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log("prueba");
}
pruebaHoisting();

*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    //console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error

} 


prueba(3);


console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
//console.log('c vale: ' + c); // error
//console.log('d vale: ' + d); // error
//console.log('e vale: ' + e); // error
//console.log('f vale: ' + f); // error

*/

/*
function calcularMesesVividos (anioNacimiento, mesNacimiento){
    return (2022 - anioNacimiento) * 12 + mesNacimiento;
}

let anioNacimiento = Number(prompt("En que año Naciste?"));
let mesNacimiento = Number(prompt("En que mes naciste?"));

console.log(
    "Tenés " + calcularMesesVividos(anioNacimiento, mesNacimiento) + " meses vividos"
) 
*/


/* tarea 1

function sumar(numeroUno, numeroDos){
    return numeroUno+numeroDos;
}

function restar(numeroUno, numeroDos){
    return numeroUno-numeroDos;
}

const numeroUno = Number(prompt("Ingresa un número"));
const numeroDos = Number(prompt("Ingresa otro número"));
const operadorMatematico = prompt("Ingresa + o -");

if (operadorMatematico ==="+"){

console.log(
    "La suma de los numeros ingresados es " + sumar(numeroUno, numeroDos));
}
else{
console.log(
    "La resta de los números ingresados es " + restar(numeroUno, numeroDos)
)
}


*/

/*

function sumar(numeroUno, numeroDos){
    return numeroUno+numeroDos;
}

function restar(numeroUno, numeroDos){
    return numeroUno-numeroDos;
}

function multiplicar(numeroUno, numeroDos){
    return numeroUno*numeroDos;
}

function dividir(numeroUno, numeroDos){
    return numeroUno/numeroDos;
}

const numeroUno = Number(prompt("Ingresa un número"));
const numeroDos = Number(prompt("Ingresa otro número"));
const operadorMatematico = prompt("Ingresa +,-,*,/ según la operación matematica que desees realizar.");

if (operadorMatematico ==="+"){

console.log(
    "La suma de los numeros ingresados es " + sumar(numeroUno, numeroDos));

}

else if(operadorMatematico ==="-"){
console.log(
    "La resta de los números ingresados es " + restar(numeroUno, numeroDos));
}

else if(operadorMatematico ==="*"){
    console.log(
        "La multiplicación de los números ingresados es " + multiplicar(numeroUno, numeroDos));
    }

else if(operadorMatematico ==="/"){
        console.log(
            "La división de los números ingresados es " + dividir(numeroUno, numeroDos));
        }
else{
    console.log ("Ingresa un operador válido")
}

*/