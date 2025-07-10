/**
 * HOC (Higher Order Components).
 * 
 * También conocidos cómo componentes de orden superior, reciben un componente
 * y retornan otro componente.
 * 
 * Beneficios:
 * - Extiende las funcionalidades de un componentes
 * - Ahorra líneas de código
 */


/**
 * En este caso el HOC actúa cómo un wrapper. Recibe un componente
 * Y añade la lógica y la plantilla HTML para mostrar una pantalla
 * de carga cuando el componente no está listo.
 * 
 * Este HOC nos permite reusar código, dado que no tenemos que escribir
 * nuevamente la lógica para renderizar una pantalla de loading para
 * otros componentes. Simplemente usamos este wrapper sobre el componente deseado.
 */
export const LoadingWrapper = (
    WrappedComponent
) => {
    return ({ isLoading }) => {

        return <>
            {
                isLoading ?
                    <div class="loading style">
                        <h1>Loading...</h1>
                    </div> :
                    <WrappedComponent />

            }
        </>

    }
}
