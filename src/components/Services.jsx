import styled from "styled-components"

const ServicesContainer = styled.section`
    background-color: white;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-family: "Bebas Neue", sans-serif;
        font-size: 4em;
        margin-bottom: 60px;
        color: #333;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        width: 100%;
        max-width: 1200px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: left;
        transition: transform 0.3s ease;
        min-height: 400px;

        &:hover {
            transform: translateY(-5px);
        }

        .image {
            width: 100%;
            height: 250px;
            background-size: cover;
            background-position: bottom;
        }

        .content {
            padding: 20px 30px 30px 30px;

            .card-title {
                font-size: 2em;
                font-family: Bebas Neue, sans-serif;
                margin-bottom: 10px;
                color: #333;
            }

            .description {
                font-size: 1.1em;
                color: #555;
                line-height: 1.5;
            }
        }
    }
`

const Services = () => {
    const servicesData = [
        {
            title: "Interior and Exterior Builds",
            imageUrl: "/service.jpeg",
            description:
                "Lantec specializes in creating stunning interior and exterior builds that elevate the aesthetics and functionality of your space. Our team is dedicated to bringing your vision to life.",
        },
        {
            title: "Design Services",
            imageUrl: "/service1.jpeg",
            description:
                "From conceptualization to execution, our design services ensure a seamless, efficient approach to your project. We deliver personalized designs that reflect your unique style.",
        },
        {
            title: "Renovations and Improvements",
            imageUrl: "/service2.jpeg",
            description:
                "Whether it’s a complete overhaul or targeted improvements, we enhance your home's beauty and functionality with our expert renovation services.",
        },
        {
            title: "Flooring Solutions",
            imageUrl: "/service3.jpeg",
            description:
                "From hardwood to tile, we provide expert guidance and installation for flooring solutions that transform your space with style and practicality.",
        },
        {
            title: "Exterior Upgrades",
            imageUrl: "/service4.jpeg",
            description:
                "Elevate your outdoor living with our exterior remodeling services. From patios to outdoor kitchens, we bring innovation and quality to every project.",
        },
    ]

    return (
        <ServicesContainer id="services">
            <div className="title">Services</div>
            <div className="grid">
                {servicesData.map((service, index) => (
                    <div className="card" key={index}>
                        <div
                            className="image"
                            style={{
                                backgroundImage: `url(${service.imageUrl})`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="card-title">{service.title}</div>
                            <div className="description">
                                {service.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ServicesContainer>
    )
}

export default Services
