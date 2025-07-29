import { useState, useEffect } from "react";


export default function Sidebar({ menuOpen, setMenuOpen }) {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const openScroll = () => {
            const offset = window.scrollY;  /* scroll animation activated in 50px */
            setScrolled(offset > 20);
        };

        window.addEventListener('scroll', openScroll);
        return () => window.removeEventListener('scroll', openScroll);
    }, []);

    return (
        <div className={`sidebar ${scrolled ? "scroll" : ""}`}>

            <img className={`logo ${scrolled ? "scroll" : ""}`} src="/images/logo.png" alt="logo" />

            <button
                className={`btn-menu ${menuOpen ? "open" : ""}`}
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}

            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>

            </button>

        </div>
    )
}