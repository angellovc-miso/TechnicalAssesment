const fs = require('fs');
const async_hooks = require('async_hooks');
const path = require('path')


/**
 * En este experimento vamos a ver cómo funcionan
 * las llamadas síncronas y asíncronas
 * vamos a inspeccionar call stack para entenderlo
 */

// Conceptos

/**
 * CallStack: es una pila de tareas donde se apilan las funciones
 * que se están ejecutando, define el orden en el que éstas se ejecutan.
 * 
 * I.E:
 * 
 * Al ejecutar la tarea A, esta se apila en el callStack
 * 
 * CallStack: [A]
 * 
 * Si la tarea A llama a la tarea B, la tarea B se apila en el callStack
 * y la tarea A se pone en pausa mientras B se ejecuta
 * 
 * CallStack: [B, A]
 * 
 * El callStack es LIFO; es decir, que la última tarea en entrar (B) debe
 * completarse primero, una vez que se completa ésta sale del CallStack y
 * se continua la ejecución con la anterior.
 * 
 * Cuando B termina es expulsada
 * 
 * CallStack: [A]
 * 
 * Y se resume la ejecución de A
 */

/**
 * Tareas Síncronas:
 * Las tareas síncronas se ejecutan secuencialmente (una tras otra)
 */

/**
 * Tareas asíncronas:
 * Las tareas asíncronas, por otra parte, son delegadas al pool de
 * hilos de ejecución o al S.O a través de la librería LibUV
 * que se encarga de llamar al kernel para pedirle que ejecute tareas
 * I/O cómo lo son las llamadas al disco duro o las llamadas de red
 */


/**
 * Explicación:
 * 
 * Las tareas síncronas se ejecutan una tras otra. Cada llamada síncrona
 * es registrada en el CallStack y este lleva la cuenta de la cantidad de
 * tareas síncronas en ejecución y cual es el orden en que se deben ejecutar.
 * 
 * Una vez que el motor de JS se encuentra con una tarea asíncrona,
 * éste, en vez de meterla al CallStack, la manda al eventLoop quien, a su vez,
 * la delega al S.O o al pool de hilos de ejecución para que sea ejecutada 
 * concurrentemente por el sistema operativo o por otro hilo independiente.
 * 
 * Una vez que el CallStack está vacío, ha terminado todas las ejecuciones síncronas,
 * el eventLoop comienza a llamar a los callbacks de las operaciones o tareas 
 * que este delegó al sistema operativo
 * 
 * En este experimento vamos a ver cómo las tareas síncronas se apilan en el stack
 * mientras que las asíncronas son disparadas, pero no apiladas inmediatamente al stack,
 * sino ejecutadas una vez el callStack ha ejecutado todas las tareas síncronas.
 * 
 * El callback de la tarea asíncrona es síncrono (el .then() de una promesa), veremos cómo
 * este si es enviado al callStack
 */


/**
 * Console.log implementation que es síncrona.
 * Es necesario ya que la implementación console.log es async
 * Y termina por introducir ruido en el experimento
 */
function log(...args) {
  const CONSLE_FILE_DESCRIPTOR = 1;
  fs.writeSync(CONSLE_FILE_DESCRIPTOR, args.join(' ') + '\n');
}

// Imprime una foto del call stack
function printStack() {
    const thisFile = path.basename(__filename);
    const RE_STACK = /^\s*at\s+(?:(?<functionCall>[^()]+?)\s+\((?<location>[^)]+)\)|(?<locationBare>[^\s]+))$/;
    
    const lines = new Error().stack.split('\n').slice(2);
    const moduleCallStackTrace = lines.map((call) => {
        const { groups: { functionCall, location, locationBare } } = call.match(RE_STACK);
        return {functionCall, location, locationBare};
    })
    
    log()
    log('____ Call Stack ____');
    moduleCallStackTrace.forEach(({functionCall, location, locationBare}) => {
        if (functionCall) {
            const funcType = !location.includes(thisFile)? 'Node-Internal': 'Call';
            log(`${funcType}: ${functionCall}. Location: ${location}`);
        } else {
            const funcType = !locationBare.includes(thisFile)? 'Node-Internal': 'Call';
            log(`${funcType}: ${locationBare}`);
        }
    })
    log('--------------------')

  }

const event_loop = async_hooks.createHook({
  init(id, type, triggerId) {
    log(`(EventLoopMessage)[initializing async task]    id=${id} type=${type} trigger=${triggerId}`);
  },
  before(id) {
    log(`(EventLoopMessage)[executing async task]  id=${id}`);
  },
  after(id) {
    log(`(EventLoopMessage)[Finished async task]   id=${id}`);
  },
});
event_loop.enable();


function secondFunction () {
    log('Ejecuta la segunda func sincrona dentro de la primera');
    printStack();
    log('Hace una llamda a una función asincrona')
    asyncTask()
    printStack();
    log('El async_hook nos muestra que una async func fue disparada')
    log('Pero esa función no esta en el callback')
    log('No está en el stack, porque el eventLoop la delegó al S.O o al threadPool')
}

function firstFunction () {
  log('Ejecuta la primera función sincrona');
  log('El stack mostratrá el nombre de esta función');
  printStack();
    secondFunction()
}

function asyncTask() {
  return setTimeout(() => {
      
      printStack();
      log('La funcion asincrona se resuelve')
      log('El callback de la funcion async aparece en el callstack')
      log('El callback solo se ejecuta cuando el callstack esta vacio')
  }, 0);
}
const main = async () => {
    log('\nInicio del script (fase sincrónica principal)');
    log('CallStack inicial:')
    printStack();
    firstFunction()
}

main();
