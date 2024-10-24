import React, { useState } from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"

const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100%;
    background-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url("../public/hero.jpeg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding: 80px 0px;

    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
        padding: 40px 0px;
        background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 1)
            ),
            url("../public/hero.jpeg");
    }

    .text-section {
        color: #ab1414;
        padding: 100px 50px;
        width: 50%;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 1150px) {
            align-items: center;
            text-align: center;
            width: 90%;
            max-width: 800px;
            padding: 20px;
        }
        @media (max-width: 500px) {
            font-size: 0.75rem;
            padding: 25px 0px;
        }

        .subtitle {
            font-size: 1.2em;
            font-weight: bold;
            color: #fb9313;
            margin-bottom: 15px;
        }

        .title {
            font-size: 3.5em;
            font-weight: bold;
            margin: 0 0 20px 0;
            color: #ffffff;
            align-items: center;
        }

        .highlight {
            color: #fb9313;
        }

        .description {
            font-size: 1.2em;
            font-weight: bold;
            line-height: 2rem;
            color: #f0f0f0;
            margin: 0;
        }
    }

    .form-section {
        display: flex;
        align-items: center;
        @media (max-width: 1150px) {
            width: 90%;
        }
    }

    .form-wrapper {
        font-size: 2rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: black;
        padding: 50px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 400px;

        @media (max-width: 1150px) {
            max-width: none;
            width: 100%;
        }

        .title {
            font-weight: 600;
            width: 85%;
            margin-bottom: 5px;
        }
        .subtitle {
            font-size: 1rem;
            width: 85%;
            margin-bottom: 15px;
            line-height: 25px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
    }

    input,
    select,
    textarea {
        padding: 15px 10px;
        margin-bottom: 15px;
        border: 2px solid #ccc;
        font-size: 1rem;
        width: 100%;
        resize: none;
        font-family: inherit;
    }

    button {
        padding: 15px 0px;
        border-radius: 5px;
        font-size: 1rem;
        width: calc(100% + 23.33px);
        background-color: #fb9313;
        color: white;
        border: none;
        cursor: pointer;
    }
`

const Hero = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        description: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Submit form data to EmailJS
    const handleSubmit = (e) => {
        e.preventDefault()

        // If phone number is not provided, set default value
        const finalData = {
            ...formData,
            phone: formData.phone ? formData.phone : "No phone number provided",
        }

        emailjs
            .send(
                "service_o2hkgsn",
                "template_8eaxbsq",
                finalData,
                "Ec62-6gaZWpu-S_FN"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text)
                    alert("Your estimate request has been sent!")
                },
                (err) => {
                    console.error("FAILED...", err)
                }
            )

        // Reset form fields after submission
        setStep(1)
        setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            description: "",
        })
    }

    const handleNext = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    return (
        <HeroContainer id="hero">
            <div className="text-section">
                <div className="subtitle">
                    Builds in Muskoka & Surrounding Areas
                </div>
                <div className="title">
                    CONSTRUCTION & RENOVATION{" "}
                    <span className="highlight">MADE EASY.</span>
                </div>
                <div className="description">
                    We specialize in high-quality construction and design
                    services in Muskoka and the surrounding areas. From full
                    builds to interior renovations, we are committed to
                    delivering exceptional craftsmanship and customer
                    satisfaction. Our team ensures every project meets the
                    highest standards, transforming your vision into reality
                    with precision and care.
                </div>
            </div>
            <div className="form-section">
                <div className="form-wrapper">
                    <div className="title">Get Your Free Estimate</div>
                    <div className="subtitle">
                        Fill out the form below and we'll reach out with a
                        custom quote for your project.
                    </div>
                    {step === 1 && (
                        <form onSubmit={handleNext}>
                            <input
                                name="name"
                                placeholder="Name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="phone"
                                placeholder="Phone Number (Optional)"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <button type="submit">Next</button>
                        </form>
                    )}
                    {step === 2 && (
                        <form onSubmit={handleSubmit}>
                            <input
                                name="city"
                                placeholder="City"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Project Description"
                                rows="8"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </HeroContainer>
    )
}

export default Hero
