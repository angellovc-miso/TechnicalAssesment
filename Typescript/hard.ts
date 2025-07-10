/**
 * ¿Cómo puedes forzar la inmutabilidad en objetos TypeScript?
 */

/**
 * Esta es una cualidad bastante poderosa de TS.
 * 
 * En JS si bien puedes usar const. Lo que guardas en
 * la variable es la referencia al objecto; entonces,
 * mientras la referencia permanece inalterable.
 * Los valores del objeto son alterables.
 */

const userJS = {
    id: '123',
    name: 'Ana'
}
userJS.name = 'Nan';


interface User {
    readonly id: string;
    readonly name: string;
}

const user: User = {
    id: '123',
    name: 'Ana'
};
// Sin embargo, si trato de hacer la operación,
// Habiendo marcado los atributos del objeto cómo readonly
// TS no me permitirá alterar sus valores
user.name = 'Nan'
