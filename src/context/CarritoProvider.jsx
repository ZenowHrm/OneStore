import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import { CarritoContext } from "./carritoContext"

const STORAGE_KEY = "onestore_carrito"

function parsePrecio(precio) {
    if (typeof precio === "number") return precio
    const numero = parseFloat(String(precio).replace(/[^0-9.]/g, ""))
    return Number.isNaN(numero) ? 0 : numero
}

function cargarCarritoInicial() {
    try {
        const guardado = localStorage.getItem(STORAGE_KEY)
        if (!guardado) return []
        const parseado = JSON.parse(guardado)
        return Array.isArray(parseado) ? parseado : []
    } catch {
        return []
    }
}

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(cargarCarritoInicial)
    const [ultimoAgregado, setUltimoAgregado] = useState(null)
    const timeoutRef = useRef(null)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito))
        } catch {
            // Ignorar errores de almacenamiento si el navegador restringe localStorage
        }
    }, [carrito])

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    const agregarAlCarrito = useCallback((producto) => {
        setCarrito((prev) => {
            const existente = prev.find((item) => item.id === producto.id)
            if (existente) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            }

            return [
                ...prev,
                {
                    id: producto.id,
                    nombre: producto.nombre,
                    categoria: producto.categoria,
                    precio: producto.precio,
                    precioNumerico: parsePrecio(producto.precio),
                    sugerenciaImg: producto.sugerenciaImg,
                    cantidad: 1
                }
            ]
        })

        setUltimoAgregado(producto.id)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setUltimoAgregado(null)
        }, 1200)
    }, [])

    const actualizarCantidad = useCallback((id, delta) => {
        setCarrito((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, cantidad: item.cantidad + delta }
                        : item
                )
                .filter((item) => item.cantidad > 0)
        )
    }, [])

    const eliminarDelCarrito = useCallback((id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id))
    }, [])

    const vaciarCarrito = useCallback(() => {
        setCarrito([])
    }, [])

    const totalPrendas = useMemo(
        () => carrito.reduce((acc, item) => acc + item.cantidad, 0),
        [carrito]
    )

    const subtotal = useMemo(
        () => carrito.reduce((acc, item) => acc + item.precioNumerico * item.cantidad, 0),
        [carrito]
    )

    const value = useMemo(
        () => ({
            carrito,
            totalPrendas,
            subtotal,
            ultimoAgregado,
            agregarAlCarrito,
            actualizarCantidad,
            eliminarDelCarrito,
            vaciarCarrito
        }),
        [
            carrito,
            totalPrendas,
            subtotal,
            ultimoAgregado,
            agregarAlCarrito,
            actualizarCantidad,
            eliminarDelCarrito,
            vaciarCarrito
        ]
    )

    let provider = (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    )

    return provider
}
