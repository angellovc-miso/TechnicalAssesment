/**
 * ¿Cómo eliminas duplicados de un arreglo en JavaScript?
 */




const repeatedValuesArray = ['a', 'b', 'a', 'c', 'b'];

/**
 * La manera más sencilla de hacerlo que involucra una complejidad 
 * O(n) es usando un Set.
 */
const uniqueValuesArray = Array.from(new Set(repeatedValuesArray))
console.log(uniqueValuesArray)
