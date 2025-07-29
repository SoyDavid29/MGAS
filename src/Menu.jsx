import { Link } from 'react-scroll';


export default function Menu({ menuOpen, setMenuOpen }){

    return(
        
        <div className={`menu ${menuOpen ? "open" : ""}`}>

                <ul className="links">
                    
                    <Link className="link" to="start" smooth={true} duration={500}>
                        Inicio
                    </Link>

                    <Link className="link" to="about" smooth={true} duration={500}>
                        Nosotros
                    </Link>

                    <Link className="link" to="technologies" smooth={true} duration={500}>
                        Presidenta
                    </Link>

                    <Link className="link" to="projects" smooth={true} duration={500}>
                        Auditorias
                    </Link>

                    <Link className="link" to="contact" smooth={true} duration={500}>
                        Noticias
                    </Link>

                    <Link className="link" to="contact" smooth={true} duration={500}>
                        Donar
                    </Link>

                    <Link className="link" to="contact" smooth={true} duration={500}>
                        Galería
                    </Link>


                    <Link className="link" to="contact" smooth={true} duration={500}>
                        Contacto
                    </Link>

                </ul>

            </div>
    )
}