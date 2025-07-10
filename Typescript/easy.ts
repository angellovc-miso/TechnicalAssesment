/**
 * ¿Qué es TypeScript y en qué se diferencia de JavaScript?
 */


/**
 * JS
 * 
 * Podemos decir que en JS todos las variables son de tipo any; es decir, 
 * las variables no son tipadas. Yo puedo asignar una variable
 * cualquier valor, sin importar con cual fue inicializada, y
 * funcionará con normalidad.
 */
let number:any = 123;
number = "Hello There"

/**
 * TS
 * 
 * Typescript, por el contrario, me permite tipar las variables. 
 * Esto quiere decir que yo puedo predecir qué valores tendran las variables
 * y los parametros de las funciones en todo momento. Vuelve a JS predecible
 * y permite al desarrollador captar errores generados por inconsistencias en
 * los datos antes de incluso correr la app
 */
let typedNumber:number = 123;
typedNumber = "Hello There";


// TS también nos permite usar las abstracciones más poderosas de OOP
interface Person {
    name: String;
    lastName: String;
    age: number
}

let Jimmy:Person = {
    name: 'Jim',
    lastName: 'Carlson',
    age: 20
}
