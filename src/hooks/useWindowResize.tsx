import { useEffect, useState } from "react";

export function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const widthChange = () => setWidth(window.innerWidth)
        window.addEventListener("resize", widthChange)
        return () => window.removeEventListener("resize", widthChange, true)
    }, [])
    return [
        width > 767,
        width > 991,
        width > 1199,
        width > 1200
    ]
}