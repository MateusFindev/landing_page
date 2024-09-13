//import Logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import "../styles/utility.css"
import "../styles/header.css"
import Button from "./Button";
import Logo from "../assets/logo2.svg";
import Close from "../assets/close_icon.svg";
import Menu from "../assets/menu_icon.svg"

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const body = document.body;

        if (showMobileMenu) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.width = "100%";
        } else {
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
        }

        return () => {
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
        };
    }, [showMobileMenu]);


    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo KM Fácil" width={220} height={80} /> 

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>


                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>
            </header>
        </>
    )
}