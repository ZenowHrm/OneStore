import { createContext, useContext } from "react"

export const CarritoContext = createContext(null)

export function useCarrito() {
    const context = useContext(CarritoContext)
    if (!context) {
        throw new Error("useCarrito debe usarse dentro de un CarritoProvider")
    }
    return context
}
