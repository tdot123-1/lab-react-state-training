import { useState } from "react"

const Carousel = ({ images }) => {

    const [picturIndex, setPictureIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(images[picturIndex]);

    const moveLeft = () => {
        setPictureIndex((currentIndex) => (currentIndex === 0 ?
            images.length - 1 : currentIndex - 1
        ));
        setCurrentImage(images[picturIndex])
    }

    const moveRight = () => {
        setPictureIndex((currentIndex) => (currentIndex === images.length - 1 ?
            0 : currentIndex + 1
        ));
        setCurrentImage(images[picturIndex])
    }



    return (
        <div>
            <button onClick={moveLeft}>Left</button>
            <img src={currentImage} />
            <button onClick={moveRight}>Right</button>
        </div>
    )
}

export default Carousel;