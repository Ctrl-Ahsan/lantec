import styled from "styled-components"
import { FaRegCompass } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { IoShieldCheckmarkSharp } from "react-icons/io5"

const AboutContainer = styled.section`
    background-color: #edf0f3;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 70px 30px;

    @media (max-width: 500px) {
        font-size: 0.9rem;
    }

    .content {
        max-width: 1200px;
    }
    .title {
        font-family: "Bebas Neue", "Roboto", sans-serif;
        font-size: 4em;
        margin-bottom: 20px;
        padding: 20px;

        @media (max-width: 500px) {
            padding: 0px;
        }
    }
    .subtitle {
        font-size: 2.5em;
        font-family: "Bebas Neue", "Roboto", sans-serif;
        margin: 80px 0px 20px 0px;
    }
    .description {
        line-height: 2;
        font-size: 1.1em;
    }
    .process {
        display: flex;
        @media (max-width: 800px) {
            flex-direction: column;
        }

        .item {
            padding: 20px;
            width: 33%;
            @media (max-width: 800px) {
                width: 100%;
                padding: 20px 0;
            }
        }
        .icon {
            font-size: 4em;
            color: #fb9313;
            margin-bottom: 10px;
        }
        .item-title {
            font-family: "Bebas Neue", "Roboto", sans-serif;
            font-size: 2em;
            margin-bottom: 10px;
        }
        .item-description {
            line-height: 1.75;
            font-size: 1.05em;
        }
    }
`

const About = () => {
    return (
        <AboutContainer id="about">
            <div className="content">
                <div className="title">
                    PREMIER CONSTRUCTION AND DESIGN SERVICES IN MUSKOKA
                </div>
                <div className="description">
                    With a deep understanding of both design and construction,
                    Lantec provides comprehensive solutions for your home. Our
                    commitment to quality craftsmanship and client satisfaction
                    means we deliver projects that stand the test of time, all
                    while keeping your goals front and center.
                </div>
                <div className="subtitle">OUR PROCESS</div>
                <div className="process">
                    <div className="item">
                        <div className="icon">
                            <FaRegCompass />
                        </div>
                        <div className="item-title">PLANNING</div>
                        <div className="item-description">
                            We’ll guide you through the design-build process,
                            create a project schedule, and provide clear
                            estimates to ensure everything stays on track.
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <FaTools />
                        </div>
                        <div className="item-title">CONSTRUCTION</div>
                        <div className="item-description">
                            We maintain high standards with quality control,
                            safety management, and effective coordination of all
                            subcontractors to ensure a smooth build.
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <IoShieldCheckmarkSharp />
                        </div>
                        <div className="item-title">COMPLETION</div>
                        <div className="item-description">
                            From final inspections to documentation, we ensure
                            your project is fully completed and backed by our
                            warranty for peace of mind.
                        </div>
                    </div>
                </div>
            </div>
        </AboutContainer>
    )
}

export default About
