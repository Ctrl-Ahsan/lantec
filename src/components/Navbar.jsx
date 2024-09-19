import styled from "styled-components"

const Navbar = () => {
    const NavbarContainer = styled.nav`
        display: flex;
        justify-content: space-between;
        width: 100vw;
        height: 80px;
        background-color: black;
        font-size: 0.8em;

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
            & .estimate {
                padding: 10px 30px;
                background-color: #ff8400;
            }
        }
    `

    return (
        <NavbarContainer>
            <div className="logo">
                <img src="../public/logo.png" />
            </div>
            <div className="nav">
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
