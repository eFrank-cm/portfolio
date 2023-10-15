import { useEffect, useRef, useState } from "react"
import docs from "../assets/data.json"

export const Carousel = ({content}) => {
    const listRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const data = docs[content]

    useEffect(() => {
        const listNode = listRef.current
        const imgNode = listNode.querySelectorAll("li")[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(current => {
                const isFirstSlide = currentIndex === 0
                return isFirstSlide ? data.length - 1 : current - 1
            })
        }
        else {
            const isLastSlide = currentIndex === data.length - 1
            if (!isLastSlide) {
                setCurrentIndex(current => current + 1)
            }
            else {
                setCurrentIndex(0)
            }

        }
    }

    const gotToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="main-container">
            <div className="arrows">
                <div className="leftArrow" onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className="rightArrow" onClick={() => scrollToImage('next')}>&#10093;</div>
            </div>

            <div className="slider-container">
                <ul ref={listRef} className="p-0">
                    {
                        data.map(item => (
                            <li key={item.id}>
                                <div className="curso">
                                    <img src={item.logo} width={45} height={45} />
                                    <div>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                                <img className="doc" src={item.url} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="dots-container">
                {
                    data.map((_, idx) => (
                        <div key={idx} className={`dot-item my-0 ${idx === currentIndex ? 'active' : ''}`} onClick={() => { gotToSlide(idx) }}>
                            <i className="bi bi-circle-fill"></i>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


