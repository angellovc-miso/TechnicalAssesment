
export default function HelloWorld() {

    const date = new Date();

    /**
     * JSX es el markdown language de React
     * Este es bastante poderoso, pues nos permite combinar
     * Javascript y HTML.
     * 
     * A diferencia de frameworks cómo Angular que separan la definición
     * de la página en templates que requieren propia sintaxis para añadir
     * lógica cómo renderizados condicionales y que son hidratados a partir
     * del resultado de los archivos JS, React maneja en un único archivo
     * el template HTML y la lógica; también, nos permite hacer renderizados
     * condicionales y demás lógica con JS.
     * 
     * Esto hacer que React sea poderoso y elegante.
     */
    return (
        <div>
            <h1>Hola, World</h1>
            <p>
                Today is: { date.getDay() === 1? 'Monday :O': date.toDateString()}
            </p>
        </div>
    );
}