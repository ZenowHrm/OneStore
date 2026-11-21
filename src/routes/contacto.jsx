import { Link } from "react-router"
import "../css/contacto.css"

const STAFF_MEMBERS = [
    {
        id: 1,
        nombre: "Susej",
        rol: "Diseño Gráfico",
        imagen: "/staff/susej.jpg",
        intro: "Soy Susej de el área de Diseño Gráfico, Te puedo dar orientación sobre tu diseño y estilo.",
        bullets: [
            "Viva Pitbull",
            "Más ansiedad que persona",
            "Una vez le cante a Maduro ( lo volvería a hacer por los beneficios )"
        ]
    },
    {
        id: 2,
        nombre: "Ricardo",
        rol: "Staff",
        imagen: "/staff/ricardo.jpg",
        intro: null,
        bullets: [
            "yo",
            "hombre man",
            "richichi",
            "el cebollo"
        ]
    },
    {
        id: 3,
        nombre: "Jesús",
        rol: "Producción & Taller",
        imagen: "/staff/jesus.webp",
        intro: null,
        bullets: [
            "apoyo las marchas feministas para protestar por los derechos de las mujeres (soy un incomprendido)",
            "Escucho Taylor Swift",
            "mido 1.90",
            "soy un chico fiel y trabajador."
        ]
    },
    {
        id: 4,
        nombre: "Mariangel",
        rol: "Dirección General",
        imagen: "/staff/mariangel.jpg",
        intro: null,
        bullets: [
            "Dictadora de la empresa, no hay aumentos de sueldo pero si aumentos de explotación laboral.",
            "No hay horario para comer, come en tu casa antes de salir.",
            "El morado es el color de la nueva dictadura."
        ]
    },
    {
        id: 5,
        nombre: "Luisa",
        rol: "Control de Calidad",
        imagen: "/staff/luisana.jpg",
        intro: null,
        bullets: [
            "L",
            "U",
            "I",
            "S",
            "A",
            "la buena"
        ]
    }
]

export function Contacto() {
    let cont = (
        <div className="contacto-page">
            {/* Header / Hero de Contacto */}
            <header className="contacto-header-section">
                <nav className="contacto-breadcrumbs" aria-label="Migas de pan">
                    <Link to="/">Inicio</Link>
                    <span className="separator">/</span>
                    <span className="current">Contacto & Staff</span>
                </nav>

                <div className="contacto-title-box">
                    <div className="contacto-title-box-left">
                        <span className="contacto-tag">Canales Oficiales // Direct Line</span>
                        <h1>
                            Hablemos <span>// One Store</span>
                        </h1>
                        <p className="contacto-subtitle">
                            Sin rodeos ni intermediarios. Conéctate con nosotros para cotizaciones especiales, dudas sobre personalización o asistencia con tus pedidos.
                        </p>
                    </div>

                    <div className="contacto-header-badge">
                        <div className="barcode-deco" aria-hidden="true"></div>
                        <div className="badge-text">
                            <span className="badge-status">
                                <span className="status-dot"></span>
                                CCS / VNZ
                            </span>
                            <span className="badge-label">Operaciones Activas</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* BLOQUE A: INFORMACIÓN DE CONTACTO */}
            <section className="contacto-info-container">
                <div className="contacto-cards-grid">
                    {/* Tarjeta 1: Ubicación */}
                    <article className="contacto-card">
                        <div className="contacto-card-top">
                            <span className="contacto-card-tag">Base Urbana</span>
                            <div className="contacto-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3>Ubicación</h3>
                        <p className="contacto-card-detail">Caracas, Venezuela</p>
                        <p>
                            Operamos y confeccionamos desde la capital para todo el país. Envíos nacionales directos a tu puerta.
                        </p>
                        <div className="contacto-card-action">
                            <span className="contacto-card-tag">Envíos a todo el país</span>
                        </div>
                    </article>

                    {/* Tarjeta 2: Atención WhatsApp */}
                    <article className="contacto-card">
                        <div className="contacto-card-top">
                            <span className="contacto-card-tag">Canal Directo</span>
                            <div className="contacto-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                </svg>
                            </div>
                        </div>
                        <h3>WhatsApp Oficial</h3>
                        <p className="contacto-card-detail">+58 (412) ONE-SHOP</p>
                        <p>
                            Chatea en vivo con nuestro equipo de atención para confirmar tallas, pagos móviles o coordinar drops.
                        </p>
                        <div className="contacto-card-action">
                            <Link to="#" className="contacto-action-btn">
                                Abrir chat de WhatsApp
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </Link>
                        </div>
                    </article>

                    {/* Tarjeta 3: Redes Sociales */}
                    <article className="contacto-card">
                        <div className="contacto-card-top">
                            <span className="contacto-card-tag">Comunidad</span>
                            <div className="contacto-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M8.7 10.7l6.6 -3.4" />
                                    <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                            </div>
                        </div>
                        <h3>Redes Sociales</h3>
                        <p>
                            Sigue nuestros lanzamientos exclusivos, adelantos de temporada y contenido de la comunidad.
                        </p>
                        <div className="contacto-social-links">
                            <Link to="#" aria-label="Instagram de One Store">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
                                    <path d="M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0" />
                                    <path d="M17 7v.01" />
                                </svg>
                                Instagram
                            </Link>
                            <Link to="#" aria-label="TikTok de One Store">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
                                </svg>
                                TikTok
                            </Link>
                        </div>
                    </article>

                    {/* Tarjeta 4: Horarios */}
                    <article className="contacto-card">
                        <div className="contacto-card-top">
                            <span className="contacto-card-tag">Disponibilidad</span>
                            <div className="contacto-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M12 7v5l3 3" />
                                </svg>
                            </div>
                        </div>
                        <h3>Horarios</h3>
                        <p>
                            <strong>Lunes a Sábado:</strong> 9:00 AM – 7:00 PM (Hora de Caracas).
                        </p>
                        <p>
                            <strong>Domingos:</strong> Atención y recepción de pedidos digitales vía WhatsApp y DM.
                        </p>
                    </article>
                </div>
            </section>

            {/* BLOQUE B: SECCIÓN DEL EQUIPO (STAFF) */}
            <section className="contacto-staff-section">
                <div className="contacto-staff-container">
                    <div className="contacto-section-header">
                        <p className="contacto-section-tag">Detrás de One // One Crew</p>
                        <h2>
                            Conoce al <span>Staff</span>
                        </h2>
                        <p>
                            Las personalidades que mueven el taller, el diseño, la producción y la tiranía detrás de cada prenda.
                        </p>
                    </div>

                    <div className="staff-cards-grid">
                        {STAFF_MEMBERS.map((miembro) => {
                            return (
                                <article key={miembro.id} className="staff-card">
                                    <div className="staff-card-image">
                                        <div className="staff-card-tags">
                                            <span className="staff-role-tag">{miembro.rol}</span>
                                        </div>
                                        <span className="staff-card-number">0{miembro.id}</span>
                                        <div className="staff-img-wrapper">
                                            <img
                                                src={miembro.imagen}
                                                alt={`Fotografía de ${miembro.nombre}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    <div className="staff-card-info">
                                        <div className="staff-card-header">
                                            <h3>{miembro.nombre}</h3>
                                            <span className="staff-subtag">One Team</span>
                                        </div>

                                        <div className="staff-text-content">
                                            {miembro.intro && (
                                                <p className="staff-intro">{miembro.intro}</p>
                                            )}

                                            <ul className="staff-bullets">
                                                {miembro.bullets.map((bullet, index) => (
                                                    <li key={index}>{bullet}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="staff-card-footer">
                                            <div className="staff-barcode" aria-hidden="true"></div>
                                            <span className="staff-dept">One Store Dept.</span>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Banner Inferior CTA */}
            <aside className="contacto-cta-banner">
                <div className="contacto-cta-inner">
                    <div className="cta-text">
                        <span className="cta-tag">¿Listo para crear?</span>
                        <h2>
                            Diseña tu estilo. <span>Sin moldes.</span>
                        </h2>
                        <p>
                            Echa un vistazo a todo nuestro catálogo de prendas urbanas o entra directamente al laboratorio de diseño interactivo.
                        </p>
                    </div>
                    <div className="cta-buttons-group">
                        <Link to="/catalogo" className="cta-btn-primary">
                            Explorar catálogo
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </svg>
                        </Link>
                        <Link to="/#vista" className="cta-btn-secondary">
                            Customizador
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    )

    return cont
}
