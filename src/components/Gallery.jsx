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
        font-size: 4em;
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
            max-width: 400px;

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
    const [hasInteracted, setHasInteracted] = useState(false)
    const thumbnailContainerRef = useRef(null)

    const galleryImages = [
        "/gallery.jpeg",
        "/gallery2.jpeg",
        "/gallery3.jpeg",
        "/gallery4.jpeg",
        "/gallery5.jpeg",
        "/gallery6.jpeg",
        "/gallery7.jpeg",
        "/gallery8.jpeg",
        "/gallery9.jpeg",
        "/gallery10.jpeg",
        "/gallery11.jpeg",
        "/gallery12.jpeg",
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
        setHasInteracted(true)
        setCurrentImageIndex(index)
    }

    useEffect(() => {
        if (hasInteracted && thumbnailContainerRef.current) {
            const selectedThumbnail =
                thumbnailContainerRef.current.children[currentImageIndex]
            selectedThumbnail.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            })
        }
    }, [currentImageIndex, hasInteracted])

    return (
        <GalleryContainer id="gallery">
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

                <div
                    className="thumbnail-container"
                    ref={thumbnailContainerRef}
                >
                    {galleryImages.map((image, index) => (
                        <div
                            className={`thumbnail ${
                                currentImageIndex === index ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
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
