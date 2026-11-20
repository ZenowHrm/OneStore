import "./main.css"
import { useEffect } from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

const root = document.getElementById('root')

// Rutas
import { Principal } from './routes/principal'
// Componentes
import { Menu } from "./components/menu.jsx"
import { Footer } from "./components/footer.jsx"

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const elemento = document.getElementById(hash.replace("#", ""))
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash])

  return null
}

function App() {
  let app = <BrowserRouter>
    <ScrollToHash />
    <Menu />
    <Routes>
      <Route path='/' element={<Principal />} />
    </Routes>
    <Footer />
  </BrowserRouter>

  return app
}

createRoot(root).render(<App />)
