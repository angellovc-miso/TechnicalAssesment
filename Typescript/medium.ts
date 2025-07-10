/**
 * ¿Qué son los genéricos en TypeScript? Proporciona un ejemplo.
 */

import { useEffect, useState } from 'react';

/**
 * Los generics te permiten tipar la respuesta
 * de funciones de las cuales, dependiendo del contexto,
 * puede recibir un tipo de respuesta u otra.
 * 
 * De esta manera, puedes convertir en predecibles
 * aquellas funciones que de otra manera no lo serían
 */

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        const res = await fetch(url);
        setData(await res.json());
        setLoading(false);
      })();
    }, [url]);
  
    return { data, loading };
}

interface Student {
    firstName: String;
    lastName: String;
    age: number
}

interface Course {
    name: String;
    credits: number;
}

// En este contexto recibiremos un estudiante
useFetch<Student>('URL/student')

// En este contexto recibiremos un curso
useEffect<Course>('URL/course');

// Depende del desarrollador decidir, basado en el contexto
// Cómo quiere que se comporte el useEffect
