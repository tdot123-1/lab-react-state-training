import { useState } from "react"

const Carousel = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(images[0]);

    const moveLeft = () => {

    }

    const moveRight = () => {
        
    }

    return (
        <div>
            <button>Left</button>
            <img src={currentImage} />
            <button>Right</button>
        </div>
    )
}