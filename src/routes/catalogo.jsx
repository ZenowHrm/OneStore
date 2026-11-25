import "../css/catalogo.css"
import { useState, useMemo } from "react"
import { Link } from "react-router"

// Datos desde JSON
import { CATALOGO } from "../JSON/drops"
import { useCarrito } from "../context/carritoContext"

export function Catalogo() {
    const { carrito, ultimoAgregado, agregarAlCarrito } = useCarrito()
    const [busqueda, setBusqueda] = useState("")
    const [filtroActivo, setFiltroActivo] = useState("TODOS")

    // Filtros por categoría / etiqueta
    const filtros = [
        { id: "TODOS", label: "Todas las piezas" },
        { id: "TEES", label: "Tees & Camisetas" },
        { id: "HOODIES", label: "Hoodies & Suéteres" },
        { id: "LIMITADA", label: "Edición Limitada" },
        { id: "CUSTOM", label: "Personalizables" }
    ]

    // Filtrado de productos en tiempo real
    const productosFiltrados = useMemo(() => {
        return CATALOGO.filter((producto) => {
            // Filtro por término de búsqueda (nombre, categoría o etiquetas)
            const coincideBusqueda = 
                producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
                producto.etiquetas.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase()))

            if (!coincideBusqueda) return false

            // Filtro por pestañas
            if (filtroActivo === "TODOS") return true
            if (filtroActivo === "TEES") {
                return producto.nombre.toLowerCase().includes("tee") || 
                       producto.categoria.toLowerCase().includes("tee") ||
                       producto.nombre.toLowerCase().includes("sleeve")
            }
            if (filtroActivo === "HOODIES") {
                return producto.nombre.toLowerCase().includes("hoodie") || 
                       producto.nombre.toLowerCase().includes("crewneck") || 
                       producto.nombre.toLowerCase().includes("sweater")
            }
            if (filtroActivo === "LIMITADA") {
                return producto.etiquetas.includes("EDICIÓN LIMITADA")
            }
            if (filtroActivo === "CUSTOM") {
                return producto.etiquetas.includes("PERSONALIZABLE")
            }
            return true
        })
    }, [busqueda, filtroActivo])

    let cat = (
        <div className="catalogo-page">
            {/* Header del Catálogo */}
            <header className="catalogo-header-section">
                <nav className="catalogo-breadcrumbs" aria-label="Migas de pan">
                    <Link to="/">Inicio</Link>
                    <span className="separator">/</span>
                    <span className="current">Catálogo Vault</span>
                </nav>

                <div className="catalogo-title-box">
                    <div className="catalogo-title-box-left">
                        <span className="catalogo-tag">Colección 2026 // Drop Vault</span>
                        <h1>
                            Catálogo <span>Completo</span>
                        </h1>
                        <p className="catalogo-subtitle">
                            Explora todas nuestras piezas urbanas con gramaje prémium. Disponibles para entrega inmediata o listas para intervenir con tu propio arte.
                        </p>
                    </div>

                    <div className="catalogo-header-badge">
                        <div className="badge-text">
                            <span className="badge-count">{CATALOGO.length}</span>
                            <span className="badge-label">Diseños Disponibles</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Controles de Búsqueda y Filtros */}
            <section className="catalogo-controls-container">
                <div className="catalogo-search-row">
                    <div className="catalogo-search-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="search-icon icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Buscar por nombre, tela, estilo (ej. 'Kong', 'Anime', 'Puff')..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        {busqueda && (
                            <button
                                type="button"
                                className="clear-search-btn"
                                onClick={() => setBusqueda("")}
                                title="Limpiar búsqueda"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                <div className="catalogo-filter-tabs">
                    {filtros.map((filtro) => {
                        return (
                            <button
                                key={filtro.id}
                                type="button"
                                className={`catalogo-filter-btn ${filtroActivo === filtro.id ? "active" : ""}`}
                                onClick={() => setFiltroActivo(filtro.id)}
                            >
                                {filtro.label}
                            </button>
                        )
                    })}
                </div>
            </section>

            {/* Listado de Productos */}
            <main className="catalogo-grid-container">
                <div className="catalogo-results-summary">
                    <p>
                        Mostrando <span className="highlight">{productosFiltrados.length}</span> de {CATALOGO.length} piezas
                    </p>
                    {busqueda && (
                        <p>
                            Filtro: "<span className="highlight">{busqueda}</span>"
                        </p>
                    )}
                </div>

                <div className="catalogo-products-grid">
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((producto) => {
                            const itemEnCarrito = carrito.find((item) => item.id === producto.id)
                            const recienAgregado = ultimoAgregado === producto.id
                            const hasRealImage = producto.sugerenciaImg && 
                                (producto.sugerenciaImg.startsWith("/") || producto.sugerenciaImg.startsWith("http"))

                            return (
                                <article key={producto.id} className="catalogo-card">
                                    {/* Cabecera / Imagen de la tarjeta */}
                                    <div className="catalogo-card-image">
                                        <div className="catalogo-card-tags">
                                            {producto.etiquetas.map((tag, idx) => (
                                                <span 
                                                    key={tag} 
                                                    className={idx % 2 === 0 ? "tag-cyan" : "tag-orchid"}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {hasRealImage ? (
                                            <div className="catalogo-img-wrapper">
                                                <img 
                                                    src={producto.sugerenciaImg} 
                                                    alt={producto.nombre} 
                                                    loading="lazy"
                                                />
                                            </div>
                                        ) : (
                                            <div className="catalogo-concept-visual">
                                                <img 
                                                    src="/shirt.png" 
                                                    alt="Mockup Base One Store" 
                                                    className="concept-shirt-icon"
                                                />
                                                <span className="concept-badge">Concepto de Diseño</span>
                                                
                                                {/* Previsualización del concepto al pasar el cursor */}
                                                <div className="concept-prompt-preview">
                                                    <p className="prompt-label">Dirección Creativa</p>
                                                    <p className="prompt-text">{producto.sugerenciaImg}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Información del producto */}
                                    <div className="catalogo-card-info">
                                        <div className="catalogo-card-top-meta">
                                            <span className="card-category">{producto.categoria}</span>
                                            <span className="card-sku">{String(producto.id).padStart(2, '0')}</span>
                                        </div>

                                        <h3 className="card-title">{producto.nombre}</h3>

                                        <div className="catalogo-card-footer">
                                            <div className="card-price-container">
                                                <span className="price-label">Precio</span>
                                                <p className="card-price">{producto.precio}</p>
                                            </div>

                                            <div className="card-actions">
                                                <Link 
                                                    to="/#vista" 
                                                    className="btn-customize" 
                                                    title="Intervenir en estudio"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                                                        <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                        <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                        <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                    </svg>
                                                    Custom
                                                </Link>

                                                <button 
                                                    type="button" 
                                                    className={`btn-add-cart ${recienAgregado ? "added" : ""}`}
                                                    onClick={() => agregarAlCarrito(producto)}
                                                    title="Añadir al carrito"
                                                    aria-label={`Añadir ${producto.nombre} al carrito`}
                                                >
                                                    {recienAgregado ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                            <path d="M12.5 17h-6.5v-14h-2" />
                                                            <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                                                            <path d="M16 19h6" />
                                                            <path d="M19 16v6" />
                                                        </svg>
                                                    )}
                                                    {itemEnCarrito && (
                                                        <span className="cart-item-count">x{itemEnCarrito.cantidad}</span>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    ) : (
                        <div className="catalogo-no-results">
                            <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="no-results-icon icon icon-tabler icons-tabler-outline icon-tabler-search-off">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 3l18 18" />
                                <path d="M8.618 8.612a7 7 0 0 0 9.77 9.77m-1.788 -5.782a7 7 0 0 0 -7.982 -7.98" />
                            </svg>
                            <h3>No se encontraron piezas</h3>
                            <p>No hay productos que coincidan con "{busqueda}". Prueba con otro término o limpia los filtros.</p>
                            <button 
                                type="button" 
                                className="btn-reset-filters"
                                onClick={() => { setBusqueda(""); setFiltroActivo("TODOS") }}
                            >
                                Restablecer filtros
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Banner inferior de invitación a customizar */}
            <aside className="catalogo-cta-banner">
                <div className="catalogo-cta-inner">
                    <div className="cta-text">
                        <span className="cta-tag">Laboratorio de Diseño</span>
                        <h2>
                            ¿Tienes una idea en mente? <span>Créala tú mismo.</span>
                        </h2>
                        <p>
                            Entra a nuestro estudio interactivo, sube tu propio arte o combina nuestros gráficos en tiempo real sobre prendas de gramaje pesado.
                        </p>
                    </div>
                    <Link to="/#vista" className="cta-btn">
                        Ir al customizador
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </Link>
                </div>
            </aside>
        </div>
    )

    return cat
}
