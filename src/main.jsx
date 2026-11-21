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
// Componentes
import { Menu } from "./components/menu.jsx"
import { Footer } from "./components/footer.jsx"

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
  let app = <BrowserRouter>
    <ScrollToHash />
    <Menu />
    <Routes>
      <Route path='/' element={<Principal />} />
      <Route path='/catalogo' element={<Catalogo />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
    <Footer />
  </BrowserRouter>

  return app
}

createRoot(root).render(<App />)
