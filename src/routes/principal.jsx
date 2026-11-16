import "../css/principal.css"

export function Principal() {
    let princ = <>
    <section className="principal-header">
        <div className="principal-header-container">
            <div className="principal-left-container">
                <div className="principal-text-container">
                    <p>Tan único como tú</p>
                    <h1>
                        <img src="/logo.svg" alt="" />
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
                    <button className="principal-button-contact">
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
                Ver mas
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
            </svg>
        </div>
    </section>

    <section className="principal-for-we">
        <h2>Sobre nosotros</h2>
        <h3>En un mundo lleno de copias, <span>tú eres el origen.</span></h3>
        <p>Vivimos rodeados de producción masiva, donde la industria dicta cómo vestir, cómo lucir y cómo encajar. Nos empujan a usar el mismo molde y a llevar exactamente lo mismo que miles de personas más. Pero la realidad es simple: nadie es igual a otro. <strong>Así nació One.</strong></p>
        <p>En <strong>One</strong> no vestimos cuerpos, vestimos personalidades. No seguimos tendencias: te damos el espacio para que crees la tuya. Porque cuando te atreves a ser auténtico, dejas de ser uno más para convertirte en el número uno.</p>
    </section>
    </>

    return princ
}