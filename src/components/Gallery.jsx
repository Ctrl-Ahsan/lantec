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
        max-width: 720px;
        height: 480px;
        background-color: black;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        border-radius: 8px;
        overflow: hidden;

        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            outline: none;
            border: none;
            user-select: none;
            -webkit-user-select: none;
        }

        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
            outline: none;
            border: none;
            user-select: none;

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

        .arrow-left {
            left: 10px;
        }

        .arrow-right {
            right: 10px;
        }
    }

    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        max-width: 720px;

        .thumbnail-container {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 10px;
            max-width: 800px;

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
                    user-select: none;
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
            setHasInteracted(true)
        }
    }

    const handlePrevious = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
            setHasInteracted(true)
        }
    }

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index)
        setHasInteracted(true)
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
                <div
                    className={`arrow arrow-left`}
                    onClick={handlePrevious}
                    style={{
                        visibility:
                            currentImageIndex === 0 ? "hidden" : "visible",
                    }}
                >
                    <FaArrowLeft />
                </div>
                <img src={galleryImages[currentImageIndex]} alt="Selected" />
                <div
                    className={`arrow arrow-right`}
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

            <div className="controls">
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
            </div>
        </GalleryContainer>
    )
}

export default Gallery
