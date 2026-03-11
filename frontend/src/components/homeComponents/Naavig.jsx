import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const currentPath = window.location.pathname

    // Gérer le scroll pour changer le style de la navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fermer le menu quand on clique sur un lien
    const handleLinkClick = () => {
        setIsOpen(false)
    }

    // Empêcher le scroll du body quand le menu mobile est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-white/95 shadow-lg py-3' 
                    : 'bg-transparent py-5'
            }`}>
                <div className="flex flex-row items-center justify-between px-4 md:px-10 relative z-10 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link to="/" className="text-[22px] tracking-tight font-bold group">
                        <span className="logo-startup bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-orange-400 transition-all duration-300">
                            startup
                        </span>
                        <span className="logo-crash text-orange-500 relative">
                            crash
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <span className="logo-lab text-gray-700">lab</span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        <>
                             <NavLink to="/" onClick={handleLinkClick}isActive={currentPath === "/"}>
                                    Accueil
                                </NavLink>
                                <NavLink too="/protocoles" onClick={handleLinkClick}isActive={currentPath === "/protocoles"}>
                                    Protocoles
                                </NavLink>
                                <NavLink too="/crashIndex" onClick={handleLinkClick}isActive={currentPath === "/crashIndex"}>
                                    CrashIndex
                                </NavLink>
                                <NavLink too="/ressources" onClick={handleLinkClick} isActive={currentPath === "/ressources"}>
                                    Ressources
                                </NavLink>
                                <NavLink too="/equipes" onClick={handleLinkClick} isActive={currentPath === "/equipes"}>
                                    Equipe
                                </NavLink>
                            </>
                        <NavLink too="/contact" onClick={handleLinkClick} isActive={currentPath === "/contact"}>
                            Contact
                        </NavLink>
                        
                        {/* Bouton Connexion (optionnel) */}
                        {/* <button className="ml-4 px-5 py-2 bg-orange-500 text-white rounded-lg font-semibold text-sm hover:bg-orange-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                            Se connecter
                        </button> */}
                    </div>

                    {/* Bouton Hamburger Mobile - Version améliorée */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden cursor-pointer   relative w-10 h-10 outline-none bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all z-50"
                        aria-label="Menu"
                    >
                        <div className="absolute left-1/2 top-1/2 m-0 p-0 -translate-x-1/2 -translate-y-1/2 w-5">
                            <div className={`absolute h-0.5 w-5 bg-linear-to-r from-orange-500 to-orange-400 rounded-full transform transition-all duration-300 ${
                                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                            }`}></div>
                            <div className={`absolute h-0.5 w-5 bg-linear-to-r from-orange-500 to-orange-400 rounded-full transform transition-all duration-300 ${
                                isOpen ? 'opacity-0' : 'opacity-100'
                            }`}></div>
                            <div className={`absolute h-0.5 w-5 bg-linear-to-r from-orange-500 to-orange-400 rounded-full transform transition-all duration-300 ${
                                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                            }`}></div>
                        </div>
                    </button>
                </div>

                {/* Menu Mobile avec animation */}
                <div className={`md:hidden fixed inset-0 bg-white  backdrop-blur-xl transition-all duration-500 ease-in-out ${
                    isOpen 
                        ? 'opacity-100 visible translate-x-0' 
                        : 'opacity-0 invisible translate-x-full'
                }`} style={{ top: '70px' }}>
                    <div className="flex flex-col h-full p-8 pt-12">
                        <div className="flex flex-col gap-6">
                            <>
                                  <MobileNavLink to = '/' onClick={handleLinkClick} delay={0.1} isActive={currentPath === "/"}>
                                        {/* <span className="text-3xl">📋</span> */}
                                        <span>Accueil</span>
                                    </MobileNavLink>
                                    <MobileNavLink too= '/protocoles' onClick={handleLinkClick} delay={0.1} isActive={currentPath === "/protocoles"}>
                                        {/* <span className="text-3xl">📋</span> */}
                                        <span>Protocoles</span>
                                    </MobileNavLink>
                                    <MobileNavLink too="/crashIndex" onClick={handleLinkClick} delay={0.2}  isActive={currentPath === "/crashIndex"}>
                                        {/* <span className="text-3xl">📊</span> */}
                                        <span>CrashIndex</span>
                                    </MobileNavLink>
                                    <MobileNavLink too="/ressources" onClick={handleLinkClick} delay={0.3}  isActive={currentPath === "/ressources"}>
                                        {/* <span className="text-3xl">📚</span> */}
                                        <span>Ressources</span>
                                    </MobileNavLink>
                                <MobileNavLink too="/equipes" onClick={handleLinkClick} delay={0.4} isActive={currentPath === "/equipes"}>
                                        {/* <span className="text-3xl">👥</span> */}
                                        <span>Equipe</span>
                                    </MobileNavLink>
                                </>
                            <MobileNavLink too="/contact" onClick={handleLinkClick} delay={0.5} isActive={currentPath === "/contact"}>
                                {/* <span className="text-3xl">📬</span> */}
                                <span>Contact</span>
                            </MobileNavLink>
                        </div>

                        {/* Séparateur décoratif */}
                        <div className="my-8 border-t border-gray-200"></div>

                        {/* Informations de contact rapides */}
                        <div className="space-y-4">
                            <p className="text-sm text-gray-500 flex items-center gap-3">
                                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                    📧
                                </span>
                                contact@startupcrashlab.com
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-3">
                                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                    📱
                                </span>
                                +229 97 00 00 00
                            </p>
                        </div>

                        {/* Bouton Connexion Mobile */}
                        {/* <button className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:scale-105 transition-all">
                            Se connecter
                        </button> */}
                    </div>
                </div>
            </nav>

            {/* Espace pour compenser la navbar fixe */}
            <div className="h-[70px]"></div>
        </>
    )
}

// Composant pour les liens du desktop avec animation
const NavLink = ({ to, href, children, onClick, isActive }) => {
    const className = `text-[14px] font-medium transition-all duration-300 relative group ${
        isActive 
            ? 'text-orange-500' 
            : 'text-gray-700 hover:text-orange-500'
    }`

    if (to) {
        return (
            <Link to={to} className={className} onClick={onClick}>
                {children}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </Link>
        )
    }

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
    )
}

// Composant pour les liens du mobile avec animation
const MobileNavLink = ({ to, href, children, onClick, delay = 0, isActive }) => {
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setShow(true), delay * 1000)
    }, [delay])

    const baseClassName = `hover:bg-orange-500 hover:text-white flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
        isActive 
            ? 'bg-gradient-to-r from-orange-50 to-orange-100/50 text-orange-500 border border-orange-200' 
            : 'hover:bg-gray-50 text-gray-700'
    }`

    const style = {
        transform: show ? 'translateX(0)' : 'translateX(20px)',
        opacity: show ? 1 : 0,
        transition: `all 0.5s ease ${delay}s`
    }

    if (to) {
        return (
            <Link to={to} className={baseClassName} onClick={onClick} style={style}>
                {children}
            </Link>
        )
    }

    return (
        <a href={href} className={baseClassName} onClick={onClick} style={style}>
            {children}
        </a>
    )
}

export default Nav