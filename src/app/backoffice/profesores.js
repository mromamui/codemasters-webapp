// src/app/backoffice/profesores.js
import React from 'react';
import RootLayout from './layout';

export default function Profesores() {
    // Datos dummy
    const profesores = [
        { id: 1, nombre: 'Carlos', asignatura: 'Matemáticas' },
        { id: 2, nombre: 'Maria', asignatura: 'Informática' },
        // Agrega más profesores aquí
    ];

    return (
        <RootLayout>
            <div>
                <h1>Profesores</h1>
                {profesores.map(profesor => (
                    <div key={profesor.id}>
                        <h2>{profesor.nombre}</h2>
                        <p>{profesor.asignatura}</p>
                    </div>
                ))}
            </div>
        </RootLayout>
    );
}