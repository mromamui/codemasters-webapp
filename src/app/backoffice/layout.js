import "./backoffice.css";

export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Alumnos</li>
                    <li>Profesores</li>
                    <li>Cursos</li>
                </ul>
            </nav>
            <section>
                {children}
            </section>
        </section>
    );
}
