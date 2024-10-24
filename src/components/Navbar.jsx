import { useState } from "react"
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const NavbarContainer = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: 80px;
        background-color: black;
        font-size: 0.8em;

        & .logo {
            display: flex;
            padding-left: 25px;
            cursor: pointer;

            & img {
                height: 40px;
            }
        }

        & .nav {
            display: flex;
            align-items: center;
            padding-right: 15px;

            & .item {
                margin: 0 10px;
                cursor: pointer;
            }
        }

        a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
            cursor: pointer;
            margin: 15px 0px;

            &:hover {
                color: #fb9313;
            }
        }

        & .hamburger,
        & .menu {
            display: none;
        }

        // Media query for responsiveness
        @media (max-width: 768px) {
            & .nav {
                display: none;
            }

            & .hamburger {
                display: flex;
                align-items: center;
                font-size: 2rem;
                color: white;
                cursor: pointer;
                padding-right: 15px;
            }

            & .menu {
                position: absolute;
                top: 80px;
                right: 0;
                width: 100%;
                padding-bottom: 10px;
                background-color: black;
                display: ${(props) => (props.isOpen ? "flex" : "none")};
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    `

    return (
        <NavbarContainer id="home" isOpen={isOpen}>
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <nav className="nav">
                <a href="#about" className="item">
                    ABOUT
                </a>
                <a href="#services" className="item">
                    SERVICES
                </a>
                <a href="#gallery" className="item">
                    GALLERY
                </a>
                <a href="#contact" className="item">
                    CONTACT
                </a>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="menu">
                <a href="#about" className="item" onClick={closeMenu}>
                    ABOUT
                </a>
                <a href="#services" className="item" onClick={closeMenu}>
                    SERVICES
                </a>
                <a href="#gallery" className="item" onClick={closeMenu}>
                    GALLERY
                </a>
                <a href="#contact" className="item" onClick={closeMenu}>
                    CONTACT
                </a>
            </div>
        </NavbarContainer>
    )
}

export default Navbar
