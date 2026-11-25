import "../css/menu.css"
import "../css/carrito.css"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import { useCarrito } from "../context/carritoContext"

export function Menu() {
    const {
        carrito,
        totalPrendas,
        subtotal,
        actualizarCantidad,
        eliminarDelCarrito
    } = useCarrito()

    const [modalPagoAbierto, setModalPagoAbierto] = useState(false)

    useEffect(() => {
        if (!modalPagoAbierto) return
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setModalPagoAbierto(false)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [modalPagoAbierto])

    const cerrarMenuMovil = () => {
        const t = document.getElementById("menu-toggle")
        if (t) t.checked = false
    }

    const cerrarCarrito = () => {
        const c = document.getElementById("cart-toggle")
        if (c) c.checked = false
    }

    let menu = <>
        <nav className="nav-menu-container">
            <div className="nav-img-container">
                <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
                <label htmlFor="menu-toggle" className="nav-button-mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </label>
                <Link to="/" className="img-container-menu">
                    <img src="/logo2.svg" alt="Logo One Store" />
                </Link>
            </div>
            <label htmlFor="menu-toggle" className="mobile-background" />
            <ul className="nav-items-constainer">
                <li>
                    <Link to="/#encabezado" onClick={cerrarMenuMovil}>Inicio</Link>
                </li>
                <li>
                    <Link to="/catalogo" onClick={cerrarMenuMovil}>Catalogo</Link>
                </li>
                <li>
                    <Link to="/contacto" onClick={cerrarMenuMovil}>Contacto</Link>
                </li>
                <li>
                    <Link to="/soporte" onClick={cerrarMenuMovil}>Soporte</Link>
                </li>
            </ul>

            <div className="nav-button-container">
                <input type="checkbox" id="cart-toggle" className="cart-checkbox" />
                <label htmlFor="cart-toggle" className="nav-cart-btn" onClick={cerrarMenuMovil}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    Carrito
                    {totalPrendas > 0 && (
                        <span className="cart-badge">{totalPrendas}</span>
                    )}
                </label>
            </div>

            <label htmlFor="cart-toggle" className="cart-background" aria-label="Cerrar carrito" />

            <aside className="cart-drawer" aria-label="Tu carrito">
                <div className="cart-drawer-header">
                    <label htmlFor="cart-toggle" className="cart-close-btn" title="Cerrar carrito" aria-label="Cerrar carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </label>
                    <h2>Tu carrito</h2>
                </div>

                <div className="cart-drawer-body">
                    {carrito.length === 0 ? (
                        <div className="cart-empty-state">
                            <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="cart-empty-icon icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-off">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M17 17a2 2 0 1 0 2 2" />
                                <path d="M17 17h-11v-11" />
                                <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
                                <path d="M3 3l18 18" />
                            </svg>
                            <h3>Tu carrito está vacío</h3>
                            <p>Agrega prendas desde Drops Destacados o explora el catálogo completo.</p>
                            <Link to="/catalogo" className="cart-empty-cta" onClick={cerrarCarrito}>
                                Ver catálogo
                            </Link>
                        </div>
                    ) : (
                        <div className="cart-items-list">
                            {carrito.map((item) => {
                                const totalLinea = (item.precioNumerico * item.cantidad).toFixed(2)
                                return (
                                    <article key={item.id} className="cart-item-card">
                                        <div className="cart-item-img">
                                            <img
                                                src={item.sugerenciaImg || "/shirt.png"}
                                                alt={item.nombre}
                                                onError={(e) => {
                                                    e.currentTarget.src = "/shirt.png"
                                                }}
                                            />
                                        </div>

                                        <div className="cart-item-details">
                                            <div className="cart-item-top">
                                                <div className="cart-item-info-text">
                                                    <h4 className="cart-item-title" title={item.nombre}>{item.nombre}</h4>
                                                    <span className="cart-item-category">{item.categoria}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="cart-item-remove"
                                                    onClick={() => eliminarDelCarrito(item.id)}
                                                    title="Quitar prenda"
                                                    aria-label={`Quitar ${item.nombre}`}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 7l16 0" />
                                                        <path d="M10 11l0 6" />
                                                        <path d="M14 11l0 6" />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="cart-item-bottom">
                                                <div className="cart-qty-controls">
                                                    <button
                                                        type="button"
                                                        className="qty-btn"
                                                        onClick={() => actualizarCantidad(item.id, -1)}
                                                        aria-label={`Disminuir cantidad de ${item.nombre}`}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="qty-value">{item.cantidad}</span>
                                                    <button
                                                        type="button"
                                                        className="qty-btn"
                                                        onClick={() => actualizarCantidad(item.id, 1)}
                                                        aria-label={`Aumentar cantidad de ${item.nombre}`}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <div className="cart-item-price">
                                                    <span className="price-total">{totalLinea} USD</span>
                                                    {item.cantidad > 1 && (
                                                        <span className="price-unit">{item.precio} c/u</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    )}
                </div>

                <div className="cart-drawer-footer">
                    <div className="cart-subtotal-info">
                        <span className="subtotal-amount">${subtotal.toFixed(2)} USD</span>
                        <span className="subtotal-label">
                            Subtotal ({totalPrendas} {totalPrendas === 1 ? "prenda" : "prendas"})
                        </span>
                    </div>

                    <button
                        type="button"
                        className="cart-pay-btn"
                        disabled={carrito.length === 0}
                        onClick={() => setModalPagoAbierto(true)}
                    >
                        Pagar pedido
                    </button>
                </div>
            </aside>
        </nav>

        {modalPagoAbierto && (
            <div
                className="cart-modal-overlay"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-pago-titulo"
                onClick={() => setModalPagoAbierto(false)}
            >
                <div className="cart-modal-card" onClick={(e) => e.stopPropagation()}>
                    <button
                        type="button"
                        className="modal-close-x"
                        onClick={() => setModalPagoAbierto(false)}
                        aria-label="Cerrar aviso"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>

                    <span className="modal-tag">Mensaje Importante</span>
                    <h3 id="modal-pago-titulo">
                        Funcion <span>no disponible</span>
                    </h3>
                    <p>
                        Esta funcionalidad es pa gente con plata, tu no plata.
                    </p>

                    <div className="cart-modal-img-wrapper">
                        <img
                            src="https://i.pinimg.com/736x/8a/42/fa/8a42fa247e5cd990f6638146737fb43f.jpg"
                            alt="Funcionalidad no disponible todavía"
                            referrerPolicy="no-referrer"
                        />
                    </div>

                    <button
                        type="button"
                        className="cart-modal-close-btn"
                        onClick={() => setModalPagoAbierto(false)}
                    >
                        Entendido
                    </button>
                </div>
            </div>
        )}
    </>

    return menu
}
