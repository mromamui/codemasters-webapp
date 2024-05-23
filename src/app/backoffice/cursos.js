// src/app/backoffice/cursos.js
import React from 'react';
import RootLayout from './layout';

export default function Cursos() {
    // Datos dummy
    const cursos = [
        { id: 1, nombre: 'Informática' },
        { id: 2, nombre: 'Matemáticas' },
        // Agrega más cursos aquí
    ];

    return (
        <RootLayout>
            <div>
                <h1>Cursos</h1>
                {cursos.map(curso => (
                    <div key={curso.id}>
                        <h2>{curso.nombre}</h2>
                    </div>
                ))}
            </div>
        </RootLayout>
    );
}