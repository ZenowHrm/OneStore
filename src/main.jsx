import "./main.css"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

const root = document.getElementById('root')

// Rutas
import { Principal } from './routes/principal'
// Componentes
import { Menu } from "./components/menu.jsx"

function App() {
  let app = <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Principal />} />
    </Routes>
  </BrowserRouter>

  return app
}

createRoot(root).render(<App />)
