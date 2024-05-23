
import React from 'react';
import RootLayout from './layout';

export default function Alumnos() {
    // Datos dummy
    const alumnos = [
        { id: 1, nombre: 'Juan', curso: 'Informática' },
        { id: 2, nombre: 'Ana', curso: 'Matemáticas' },
    ];

    return (
        <RootLayout>
            <div>
                <h1>Alumnos</h1>
                {alumnos.map(alumno => (
                    <div key={alumno.id}>
                        <h2>{alumno.nombre}</h2>
                        <p>{alumno.curso}</p>
                    </div>
                ))}
            </div>
        </RootLayout>
    );
}