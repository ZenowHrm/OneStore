/* eslint-disable react-refresh/only-export-components */
import "./main.css"
import { useEffect } from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

const root = document.getElementById('root')

// Rutas
import { Principal } from './routes/principal'
import { Catalogo } from './routes/catalogo'
import { Contacto } from './routes/contacto'
import { Promo } from "./routes/promo.jsx"
// Componentes
import { Menu } from "./components/menu.jsx"
import { Footer } from "./components/footer.jsx"
// Contextos
import { CarritoProvider } from "./context/CarritoProvider.jsx"

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const elemento = document.getElementById(hash.replace("#", ""))
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])

  return null
}

function App() {
  let app = <CarritoProvider>
    <BrowserRouter>
      <ScrollToHash />
      <Menu />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/soporte" element={<Promo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CarritoProvider>

  return app
}

createRoot(root).render(<App />)
