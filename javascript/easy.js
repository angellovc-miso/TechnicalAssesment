/**
 * Explica la diferencia entre `==` y `===` en JavaScript
 *
 * 
*/

(() => {

    /**
     * datatype coercion
     * 
     * Para entender cómo funcionan los operadores de igualdad debil (==)
     * e igualdad fuerte (===) es necesario entender la coerción de tipos
     * 
     * Javascript fue diseñado cómo un lenguaje simple para ser ejecutado
     * en el explorador. En un contexto donde los lenguajes de programación
     * eran fuertemente tipados, asignar un valor de tipo X a una variable
     * de tipo Y podía causar un error fatal en la aplicación.
     * 
     * I.E:
     * int x = '1'; -> Fatal Error!
     * 
     * La coerción nació para evitar que errores en asignación de valores
     * terminara en un error fatal que arruinara la interactividad de la
     * página (o peor aún, la visibilidad de los elementos en la misma).
     * JS preferiría inconsistencia en los datos sobre application crashes
     */

    
    /**
     * Estoes lo que llamamos coerción de datos.
     * JS tratará de inferir el tipo de dato basado en el contexto 
     */
    const number = 2 * '5';
    console.log(number);
    

    const string = "hello there" + 232
    console.log(string);


    // Cuando usamos el operador de comparación debil
    // Este usará coerción para inferir si dos valores son iguales
    // También la podemos llamar comparación por coerción
    console.log(`es 5 == '5': ${5=='5'}`)

    // Cuando usamos el operador fuerte
    // Este no usará coerción para inferir los valores
    // También la podemos llamar comparación estricta
    console.log(`es 5 === '5': ${5 ==='5'}`)
    

})()