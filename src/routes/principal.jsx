import { useState } from "react"
import { useNavigate } from "react-router"
import "../css/principal.css"

// Componentes
import { DROPS_DESTACADOS } from "../JSON/drops"

const COLORES_TELA = [
    { id: "dark", nombre: "Negro Abismo", hex: "#1e1a3e" },
    { id: "light", nombre: "Blanco Crudo", hex: "#f5f4f8" },
    { id: "lavender", nombre: "Lavanda Urbano", hex: "#8d76b4" }
]

const ESTAMPADOS_MUESTRA = [
    {
        id: "glitch",
        nombre: "Cyber Glitch",
        descripcion: "Gráfico oversize en cian y orquídea",
        imagen: "/ciber-glitch.png"
    },
    {
        id: "origin",
        nombre: "Origen Tag",
        descripcion: "Tipografía brutalista frontal con código de barras",
        imagen: "/origen.png"
    },
    {
        id: "minimal",
        nombre: "One Heavy Emblem",
        descripcion: "Emblema minimalista de alta densidad en el pecho",
        imagen: "/logo2.svg"
    }
]

const LOOKBOOK_ITEMS = [
    {
        id: 1,
        tamano: "bento-featured",
        diseno: "Hoodie 'Neo-Tokyo Riot'",
        usuario: "@kael.vzn (Instagram)",
        sugerenciaImg: "/prendas/LOOK_BOOK/hoodieIntervenido.webp"
    },
    {
        id: 2,
        tamano: "bento-wide",
        diseno: "Oversized Tee 'Acid Drop'",
        usuario: "@valeria.raw (TikTok)",
        sugerenciaImg: "/prendas/LOOK_BOOK/skatepark.webp"
    },
    {
        id: 3,
        tamano: "bento-standard",
        diseno: "Cargo 'System Error'",
        usuario: "@diego_stwt (Instagram)",
        sugerenciaImg: "/prendas/LOOK_BOOK/bolsillo.webp"
    },
    {
        id: 4,
        tamano: "bento-standard",
        diseno: "Tee 'Zero Mold'",
        usuario: "@mika.ink (TikTok)",
        sugerenciaImg: "/prendas/LOOK_BOOK/analogo.webp"
    }
]

export function Principal() {
    const navigate = useNavigate()
    const [colorActivo, setColorActivo] = useState(COLORES_TELA[0])
    const [estampadoActivo, setEstampadoActivo] = useState(ESTAMPADOS_MUESTRA[0])

    let princ = <>
    <section id="encabezado" className="principal-header">
        <div className="principal-header-container">
            <div className="principal-left-container">
                <div className="principal-text-container">
                    <p>Tan único como tú</p>
                    <h1>
                        <img src="/logo.svg" alt="Logo One Store" />
                        Store
                    </h1>
                </div>
                <div className="principal-buttons-container">
                    <button className="principal-button-custom">
                        Customizar pieza
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </button>
                    <button 
                        type="button" 
                        className="principal-button-contact"
                        onClick={() => navigate('/contacto')}
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
            <div className="principal-right-container">
                <div className="principal-rectangulo">
                    <div className="rectangulo-img-container">
                        <img src="/people.webp" alt="foto de una chica con una camisa de la marca" />
                    </div>
                </div>
            </div>
        </div>
        <div className="principal-see-more">
            <p>
                Ver más
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
            </svg>
        </div>
    </section>

    <section id="nosotros" className="principal-for-we">
        <h2>Sobre nosotros</h2>
        <h3>En un mundo lleno de copias, <span>tú eres el origen.</span></h3>
        <p>Vivimos rodeados de producción masiva, donde la industria dicta cómo vestir, cómo lucir y cómo encajar. Nos empujan a usar el mismo molde y a llevar exactamente lo mismo que miles de personas más. Pero la realidad es simple: nadie es igual a otro. <strong>Así nació One.</strong></p>
        <p>En <strong>One</strong> no vestimos cuerpos, vestimos personalidades. No seguimos tendencias: te damos el espacio para que crees la tuya. Porque cuando te atreves a ser auténtico, dejas de ser uno más para convertirte en el número uno.</p>
    </section>

    {/* 1. CÓMO FUNCIONA (EL PROCESO EN 3 PASOS) */}
    <section className="principal-steps-section">
        <div className="principal-section-header">
            <p className="principal-section-tag">El proceso</p>
            <h2>Crea tu pieza en <span>3</span> pasos</h2>
        </div>

        <div className="principal-steps-grid">
            <article className="principal-step-card">
                <div className="step-card-top">
                    <span className="step-number">01</span>
                    <div className="step-barcode" aria-hidden="true"></div>
                </div>
                <div className="step-icon-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shirt">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                    </svg>
                </div>
                <h3>Elige tu prenda base</h3>
                <p>Selecciona el corte que mejor va contigo: <strong>Oversized Tee</strong>, <strong>Hoodie</strong> de alto gramaje o <strong>Cargo</strong> técnico.</p>
            </article>

            <article className="principal-step-card">
                <div className="step-card-top">
                    <span className="step-number">02</span>
                    <div className="step-barcode" aria-hidden="true"></div>
                </div>
                <div className="step-icon-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brush">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                        <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                        <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                        <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                    </svg>
                </div>
                <h3>Sube tu diseño o usa nuestros gráficos</h3>
                <p>Carga tu propio arte sin límites de color o explora nuestra bóveda de estampados exclusivos de estilo urbano.</p>
            </article>

            <article className="principal-step-card">
                <div className="step-card-top">
                    <span className="step-number">03</span>
                    <div className="step-barcode" aria-hidden="true"></div>
                </div>
                <div className="step-icon-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        <path d="M3 9l4 0" />
                    </svg>
                </div>
                <h3>Producción y envío</h3>
                <p>Estampamos tu prenda bajo demanda con calidad de estudio y la enviamos directo a tu puerta lista para destacar.</p>
            </article>
        </div>
    </section>

    {/* 2. PREVIEW INTERACTIVO DEL CUSTOMIZADOR */}
    <section id="vista" className="principal-customizer-section">
        <div className="principal-customizer-container">
            <div className="principal-section-header">
                <p className="principal-section-tag">Prueba en tiempo real</p>
                <h2>Tu lienzo, tus reglas</h2>
                <p>Cambia el tono de la tela y combina un gráfico de muestra antes de entrar al estudio.</p>
            </div>

            <div className="customizer-interactive-grid">
                {/* Controles de color de tela */}
                <div className="customizer-panel">
                    <h4>1. Color de tela</h4>
                    <div className="customizer-color-list">
                        {COLORES_TELA.map((color) => (
                            <button
                                key={color.id}
                                type="button"
                                className={`color-swatch-btn ${colorActivo.id === color.id ? "active" : ""}`}
                                onClick={() => setColorActivo(color)}
                            >
                                <span
                                    className="color-circle"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <span className="color-name">{color.nombre}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mockup central */}
                <div className="customizer-stage">
                    <div className={`customizer-mockup-box tela-${colorActivo.id}`}>
                        <div className="mockup-badge">
                            <span>{colorActivo.nombre}</span>
                            <span>—</span>
                            <span>{estampadoActivo.nombre}</span>
                        </div>

                        <div className="mockup-garment-area">
                            <div className="mockup-shirt-container" style={{"--color": colorActivo.hex}}>
                                <img src="/shirt.png" alt="" />
                            </div>
                            <div className={`mockup-print-area print-${estampadoActivo.id}-${colorActivo.id}`}>
                                <img src={estampadoActivo?.imagen} alt={`Estanpado de ${estampadoActivo.nombre}`} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controles de estampados */}
                <div className="customizer-panel">
                    <h4>2. Estampado de muestra</h4>
                    <div className="customizer-print-list">
                        {ESTAMPADOS_MUESTRA.map((estampado) => (
                            <button
                                key={estampado.id}
                                type="button"
                                className={`print-selector-btn ${estampadoActivo.id === estampado.id ? "active" : ""}`}
                                onClick={() => setEstampadoActivo(estampado)}
                            >
                                <strong>{estampado.nombre}</strong>
                                <span>{estampado.descripcion}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="customizer-cta-wrapper">
                <button type="button" className="principal-button-studio">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    </svg>
                    Abrir estudio de diseño completo
                </button>
            </div>
        </div>
    </section>

    {/* 3. DROPS DESTACADOS / CATÁLOGO BASE */}
    <section id="productos" className="principal-drops-section">
        <div className="principal-drops-container">
            <div className="principal-section-header">
                <p className="principal-section-tag">Listos para llevar o intervenir</p>
                <h2>Drops destacados</h2>
            </div>

            <div className="principal-drops-grid">
                {DROPS_DESTACADOS.map((producto) => (
                    <article key={producto.id} className="drop-card">
                        <div className="drop-card-image">
                            <div className="drop-tags-container">
                                {producto.etiquetas.map((tag) => (
                                    <span key={tag} className="drop-cyan-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="drop-img-placeholder">
                                <img src={producto?.sugerenciaImg} alt="" />
                            </div>
                        </div>

                        <div className="drop-card-info">
                            <span className="drop-category">{producto.categoria}</span>
                            <h3>{producto.nombre}</h3>
                            <div className="drop-card-footer">
                                <p className="drop-price">{producto.precio}</p>
                                <button type="button" className="drop-add-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>

    {/* 4. COMUNIDAD / LOOKBOOK ("#TúEresElOrigen") */}
    <section id="comunidad" className="principal-lookbook-section">
        <div className="principal-lookbook-container">
            <div className="principal-section-header">
                <p className="principal-section-tag">Comunidad One</p>
                <h2>#TúEresElOrigen</h2>
                <p>Piezas reales creadas por nuestra comunidad. Etiquétanos para aparecer en el mural.</p>
            </div>

            <div className="lookbook-bento-grid">
                {LOOKBOOK_ITEMS.map((item) => (
                    <article key={item.id} className={`lookbook-bento-item ${item.tamano}`}>
                        <div className="lookbook-img-placeholder">
                            <img src={`${item.sugerenciaImg}`} alt="" />
                        </div>

                        <div className="lookbook-hover-overlay">
                            <div className="lookbook-overlay-content">
                                <span className="lookbook-piece-name">{item.diseno}</span>
                                <p className="lookbook-creator">
                                    {/* ICONO SUGERIDO: Icono de Instagram o TikTok según el creador (ej. icon-tabler-brand-instagram o icon-tabler-brand-tiktok) */}
                                    Creado por <strong>{item.usuario}</strong>
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>

    {/* 5. BANNER DE CIERRE (CTA FINAL) */}
    <section className="principal-final-cta">
        <div className="principal-final-cta-container">
            <div className="final-cta-barcode" aria-hidden="true"></div>
            <h2>
                Deja de seguir tendencias. <span>Crea la tuya.</span>
            </h2>
            <p>Diseña desde cero en nuestro estudio interactivo o personaliza una prenda de nuestra colección base.</p>
            <div className="final-cta-buttons">
                <button type="button" className="principal-button-custom">
                    Ir al customizador
                </button>
                <button 
                    type="button" 
                    className="principal-button-contact"
                    onClick={() => navigate('/catalogo')}
                >
                    Explorar catálogo
                </button>
            </div>
        </div>
    </section>
    </>

    return princ
}