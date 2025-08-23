import { Link } from 'react-scroll';
import { Element } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Newsection({ form }) {

    return (
        <section className="newsection">

            <Element name='auditories'>

                <div className="text-area">

                    <h1 className="title-newsection">EMPRESA AUDITORA</h1>

                    <div className="section">

                        <div className="sect-textos">
                            <h3>AUDITOR</h3>
                            <h1>Ernst and Young</h1>
                            <p>En 2017 E&Y nos realiza la primer auditoria contable.</p>
                            <p>Obteniendo resultado  Satisfactorio.</p>
                            <p>Cuatro años siendo auditados.</p>
                            <button>Ver más...</button>
                        </div>

                        <img className="logoey" src="/images/imagen11.png" alt="logo EY" />

                    </div>

                </div>

            </Element>

            <Element name='donation'>

                <div className="donation-section">

                    <h1>APOYANOS CON TU DONACIÓN</h1>

                    <div className="img-donation">
                        <img className="image-donation" src="/images/imagen13.png" alt="imagen donacion" />
                        <img className="image-donation" src="/images/imagen12.png" alt="imagen donacion" />
                    </div>

                </div>

            </Element>

            <div className="contact-us">

                <h1>CONTACTANOS</h1>


                <Element name='contact'>

                    <div className="contact">

                        <p>Sus opiniones son importantes para nosotros.
                            Ya sea una pregunta simple o una sugerencia valiosa,
                            estamos aquí 24/7. Puede llamarnos por teléfono o enviarnos un correo electrónico directamente.
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=fundacionmgas@gmail.com&su=Info&body=Me%20gustaría%20ponerme%20%20en contacto con ustedes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span></span>fundacionmgas@gmail.com
                        </a>

                        <img className="logo-in" src="/images/logo.png" alt="logo de la fundación" />
                    </div>

                </Element>


                <div className="formulario">

                    <h1>TAMBIÉN PUEDES CONTACTARNOS DE LA SIGUIENTE MANERA</h1>

                    {form}
                </div>

                <div className="activities-section">

                    <h1>GALERÍA DE ACTIVIDADES</h1>

                    <h3>NOTICIAS</h3>

                    <table className="table">

                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>ACTIVIDAD</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Febrero 2020</td>
                                <td>“Taller de Terapias Cuernavaca, Morelos”
                                    "Oaxaca"
                                </td>
                            </tr>

                            <tr><td>Marzo 2020</td><td>“Mujeres Líderes que trabajan por México”</td></tr>

                            <tr><td>Abril 2020</td><td>“Todo saldrá bien”</td></tr>

                            <tr><td>Mayo 2020</td><td>“Apoyo durante emergencia sanitaria Covid19”</td></tr>

                            <tr><td>Junio 2020</td><td>Alianza con otras Fundaciones “Fortaleza, IAP refugio para mujeres victimas de violencia”</td></tr>

                            <tr><td>Julio 2020</td><td>“Apoyos con despensas Tezontepec de Aldama, Hidalgo” CEMEFI Fondo despensas MX</td></tr>

                            <tr><td>Agosto 2020</td><td>“Anthus_ac apoyo a victimas de trata.</td></tr>

                            <tr><td>Septiembre 2020</td><td> “Hoy va por Diego” “Apoyo a artesanas cubrebocas”</td></tr>

                            <tr><td>Noviembre 2020</td><td>“Pasa la Voz”</td></tr>

                            <tr><td>Diciembre 2020</td><td>“Pasarela Épica” </td></tr>

                        </tbody>


                    </table>

                </div>

                <div className="social-media">

                    <div className='logos-container' >
                        <img className="logos-rs" src="/images/fb.png" alt="logo de facebook" />
                        <img className="logos-rs" src="/images/instagram.png" alt="logo de instagram" />
                        <img className="logos-rs" src="/images/twitter.png" alt="logo de twitter" />
                    </div>

                    <h4>
                        © Derechos de autor 2025 Fundacion MGAS
                    </h4>


                </div>

                <div className='menu-down'>

                    <img className='logo-in' src="/images/logo.png" alt="logo fundacionMGAS" />

                    <ul className="enlaces">

                        <Link className="link" to="start" smooth={true} duration={500}>
                            Inicio
                        </Link>

                        <Link className="link" to="about" smooth={true} duration={500}>
                            Nosotros
                        </Link>

                        <Link className="link" to="president" smooth={true} duration={500}>
                            Presidenta
                        </Link>

                        <Link className="link" to="auditories" smooth={true} duration={500}>
                            Auditorias
                        </Link>

                        <Link className="link" to="start" smooth={true} duration={500}>
                            Noticias
                        </Link>

                        <Link className="link" to="donation" smooth={true} duration={500}>
                            Donar
                        </Link>

                        <Link className="link" to="galery" smooth={true} duration={500}>
                            Galería
                        </Link>


                        <Link className="link" to="contact" smooth={true} duration={500}>
                            Contacto
                        </Link>

                    </ul>
                </div>




            </div>


        </section>



    )
}