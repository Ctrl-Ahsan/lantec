import { useState } from "react"
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const NavbarContainer = styled.header`
        display: flex;
        justify-content: space-between;
        width: 100vw;
        height: 80px;
        background-color: black;
        font-size: 0.8em;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        & .logo {
            display: flex;
            padding-left: 15px;
            cursor: pointer;
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
        & .estimate {
            padding: 10px 30px;
            background-color: #ff8400;
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

                & .item {
                    display: block;
                    margin: 15px 0;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    `

    return (
        <NavbarContainer isOpen={isOpen}>
            <div className="logo">
                <img src="../public/logo.png" alt="Logo" />
            </div>
            <nav className="nav">
                <div className="item">HOME</div>
                <div className="item">SERVICES</div>
                <div className="item">GALLERY</div>
                <div className="item">ABOUT</div>
                <div className="item estimate">FREE ESTIMATE</div>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="menu">
                <div className="item">HOME</div>
                <div className="item">SERVICES</div>
                <div className="item">GALLERY</div>
                <div className="item">ABOUT</div>
                <div className="item estimate">FREE ESTIMATE</div>
            </div>
        </NavbarContainer>
    )
}

export default Navbar
