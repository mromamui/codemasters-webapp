// src/app/backoffice/inicio.js
import React from 'react';
import RootLayout from './layout';

export default function Inicio() {
    return (
        <RootLayout>
            <div>
                <h1>Inicio</h1>
                <p>Bienvenido al Dashboard de CodeMasters</p>
                <p>¡ Gestiona los cursos desde aquí !</p>
                <p>Selecciona una sección en el menú de la izquierda</p>
            </div>
        </RootLayout>
    );
}