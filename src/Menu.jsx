import { Link } from 'react-scroll';

export default function Menu({ menuOpen, onClose }) {

  return (

    <div className={`menu ${menuOpen ? 'open' : ''}`}>

      <ul className="links">
        <Link className="link" to="start" smooth={true} duration={500} onClick={onClose}>
          Inicio
        </Link>

        <Link className="link" to="about" smooth={true} duration={500} onClick={onClose}>
          Nosotros
        </Link>

        <Link className="link" to="president" smooth={true} duration={500} onClick={onClose}>
          Presidenta
        </Link>

        <Link className="link" to="auditories" smooth={true} duration={500} onClick={onClose}>
          Auditorias
        </Link>

        <Link className="link" to="start" smooth={true} duration={500} onClick={onClose}>
          Noticias
        </Link>

        <Link className="link" to="donation" smooth={true} duration={500} onClick={onClose}>
          Donar
        </Link>

        <Link className="link" to="galery" smooth={true} duration={500} onClick={onClose}>
          Galería
        </Link>

        <Link className="link" to="contact" smooth={true} duration={500} onClick={onClose}>
          Contacto
        </Link>
      </ul>

    </div>
  );
}
