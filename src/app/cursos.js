import React, { useEffect, useState } from 'react';
import FichaCurso from '../components/FichaCurso';

export default function Cursos() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        fetch('https://localhost:3000/cursos')
            .then(response => response.json())
            .then(data => setCursos(data));
    }, []);

    return (
        <div>
            {cursos.map(curso => (
                <FichaCurso
                    key={curso.id}
                    nombre={curso.nombre}
                    curso={curso.curso}
                    descripcion={curso.descripcion}
                />
            ))}
        </div>
    );
}