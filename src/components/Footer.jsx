import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    .colored-container {
        display: flex;
        justify-content: space-evenly;
        background-color: #fb9313;
        width: 100%;
        height: 500px;
        @media (max-width: 500px) {
            padding: 30px 0px;
        }
    }
    .quote-section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        max-width: 1500px;

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-evenly;
            text-align: left;
        }

        .text-content {
            text-align: center;
            max-width: 400px;
            @media (min-width: 768px) {
                text-align: left;
            }

            .quote-text {
                font-size: 3rem;
                font-family: "Bebas Neue", "Roboto", sans-serif;
                margin-bottom: 20px;
            }

            .quote-description {
                font-size: 1.2rem;
                line-height: 1.5;
                margin-bottom: 20px;
            }
        }

        button {
            padding: 15px 30px;
            font-size: 1rem;
            font-weight: bold;
            background-color: white;
            color: #fb9313;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;

            &:hover {
                scale: 1.05;
            }

            @media (min-width: 768px) {
                align-self: center;
                max-width: 20%;
            }
        }
    }

    .footer-links {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        max-width: 1500px;
        margin-top: 40px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .logo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: 150px;
                margin-bottom: 20px;
            }
        }

        .quick-links,
        .contact {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            @media (max-width: 768px) {
                align-items: center;
            }

            h4 {
                font-size: 1.5rem;
                margin-bottom: 20px;
                font-family: Bebas Neue;
            }

            a {
                color: white;
                text-decoration: none;
                margin-bottom: 16px;
                transition: color 0.3s ease;
                cursor: pointer;

                &:hover {
                    color: #fb9313;
                }
            }

            p {
                color: white;
                margin: 0;
            }
        }
        .quick-links {
            a {
                font-size: 0.75em;
            }
        }
    }

    .footer-bottom {
        margin-top: 40px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 0.9rem;
        color: #777;
    }
`

const Footer = () => {
    const scrollToHero = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <FooterContainer>
            <div className="colored-container">
                <div className="quote-section">
                    <div className="text-content">
                        <div className="quote-text">
                            REQUEST A FREE QUOTE FOR YOUR PROJECT.
                        </div>
                        <div className="quote-description">
                            Get a complimentary, no-obligation quote to help you
                            estimate the budget and cost of your project. We're
                            here to provide answers and assist with any
                            questions you have about our services.
                        </div>
                    </div>
                    <button onClick={scrollToHero}>Get A Free Estimate</button>
                </div>
            </div>
            <div className="footer-links" id="contact">
                <div className="logo">
                    <img src="/logo.png" alt="Company Logo" />
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    <a href="#gallery">GALLERY</a>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <a href="mailto:lantec.builds@gmail.com">
                        ✉️ lantec.builds@gmail.com
                    </a>
                    <a href="tel:+16473099110">📞 (647)-309-9110</a>
                    <p>📍 233 Brunel Rd, Huntsville ON P1H 1R6</p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Lantec Builds. All Rights Reserved.
            </div>
        </FooterContainer>
    )
}

export default Footer
