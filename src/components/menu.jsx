import "../css/menu.css"
import { useState } from "react"
import { Link } from "react-router"

export function Menu() {
    let menu = <nav className="nav-menu-container">
        <div className="nav-img-container">
            <div className="img-container">
                <img src="/logo.svg" alt="" />
            </div>
        </div>
        <ul className="nav-items-constainer">
            <li>
                <Link to={"#"}>Inicio</Link>
            </li>
            <li>
                <Link to={"#"}>Catalogo</Link>
            </li>
            <li>
                <Link to={"#"}>Contacto</Link>
            </li>
            <li>
                <Link to={"#"}>Soporte</Link>
            </li>
        </ul>
        <div className="nav-button-container">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                Carrito
            </button>
        </div>
    </nav>

    return menu
}