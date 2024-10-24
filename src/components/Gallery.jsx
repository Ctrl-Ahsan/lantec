import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const GalleryContainer = styled.section`
    background-color: #edf0f3;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-family: "Bebas Neue", sans-serif;
        font-size: 3em;
        margin-bottom: 40px;
        color: #333;
    }

    .selected-image {
        width: 80%;
        max-width: 800px;
        height: auto;
        margin-bottom: 30px;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;

        img {
            width: 100%;
            max-height: 480px;
            object-fit: contain;
            border-radius: 8px;
        }
    }

    .controls {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 90%;
        max-width: 800px;
        margin-top: 20px;

        .arrow {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }

            &:disabled {
                background-color: rgba(0, 0, 0, 0.3);
                cursor: not-allowed;
            }

            svg {
                font-size: 1.5em;
            }
        }

        .thumbnail-container {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 10px;

            .thumbnail {
                width: 100px;
                height: 70px;
                border-radius: 5px;
                cursor: pointer;
                opacity: 0.6;
                flex-shrink: 0;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: 5px;
                }

                &.active {
                    border: 2px solid #333;
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .selected-image {
            width: 100%;
            max-width: 100%;
        }

        .thumbnail-container {
            max-width: 300px;
        }

        .thumbnail {
            width: 80px;
            height: 60px;
        }
    }
`

const Gallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Array of refs for thumbnails
    const thumbnailRefs = useRef([])

    const galleryImages = [
        "../public/gallery.jpeg",
        "../public/gallery2.jpeg",
        "../public/gallery3.jpeg",
        "../public/gallery4.jpeg",
        "../public/gallery5.jpeg",
        "../public/gallery6.jpeg",
        "../public/gallery7.jpeg",
        "../public/gallery8.jpeg",
        "../public/gallery9.jpeg",
        "../public/gallery10.jpeg",
        "../public/gallery11.jpeg",
        "../public/gallery12.jpeg",
    ]

    const handleNext = () => {
        if (currentImageIndex < galleryImages.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const handlePrevious = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index)
    }

    // Scroll the selected thumbnail into view when the image changes
    useEffect(() => {
        if (thumbnailRefs.current[currentImageIndex]) {
            thumbnailRefs.current[currentImageIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center",
            })
        }
    }, [currentImageIndex])

    return (
        <GalleryContainer>
            <div className="title">Gallery</div>

            <div className="selected-image">
                <img src={galleryImages[currentImageIndex]} alt="Selected" />
            </div>

            <div className="controls">
                <div
                    className="arrow"
                    onClick={handlePrevious}
                    style={{
                        visibility:
                            currentImageIndex === 0 ? "hidden" : "visible",
                    }}
                >
                    <FaArrowLeft />
                </div>

                <div className="thumbnail-container">
                    {galleryImages.map((image, index) => (
                        <div
                            className={`thumbnail ${
                                currentImageIndex === index ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            ref={(el) => (thumbnailRefs.current[index] = el)}
                        >
                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div
                    className="arrow"
                    onClick={handleNext}
                    style={{
                        visibility:
                            currentImageIndex === galleryImages.length - 1
                                ? "hidden"
                                : "visible",
                    }}
                >
                    <FaArrowRight />
                </div>
            </div>
        </GalleryContainer>
    )
}

export default Gallery