import "../css/footer.css"
import { Link } from "react-router"

export function Footer() {
    let footer = <footer className="footer">
        <div className="footer-container">
            <div className="footer-brand">
                <Link to="/" className="footer-logo">
                    <img src="/logo.svg" alt="Logo One Store" />
                </Link>
                <p className="footer-tagline">
                    En un mundo lleno de copias, tú eres el origen. Prendas urbanas diseñadas por y para quienes no siguen moldes.
                </p>
                <ul className="footer-socials" aria-label="Redes sociales">
                    <li>
                        <Link to="#" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
                                <path d="M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0" />
                                <path d="M17 7v.01" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" aria-label="TikTok">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>

            <nav className="footer-nav" aria-label="Explorar tienda">
                <h4>Explorar</h4>
                <ul>
                    <li><Link to="/#encabezado">Inicio</Link></li>
                    <li><Link to="/#vista">Customizar pieza</Link></li>
                    <li><Link to="/#productos">Drops destacados</Link></li>
                    <li><Link to="/#comunidad">#TúEresElOrigen</Link></li>
                    <li><Link to="/#nosotros">Sobre nosotros</Link></li>
                </ul>
            </nav>

            <nav className="footer-nav" aria-label="Ayuda y soporte">
                <h4>Soporte</h4>
                <ul>
                    <li><Link to="#">Guía de tallas</Link></li>
                    <li><Link to="#">Producción y envíos</Link></li>
                    <li><Link to="#">Preguntas frecuentes</Link></li>
                    <li><Link to="#">Contáctanos</Link></li>
                </ul>
            </nav>

            <nav className="footer-bottom">
                <h4>Legal</h4>
                <ul className="footer-legal">
                    <li><Link to="#">Términos y condiciones</Link></li>
                    <li><Link to="#">Política de privacidad</Link></li>
                    <li><Link to="#">Cambios y devoluciones</Link></li>
                </ul>
            </nav>
        </div>
        <p className="footer-copy">&copy; 2026 One Store. Todos los derechos reservados.</p>
    </footer>

    return footer
}