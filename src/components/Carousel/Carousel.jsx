import { useState } from "react";
import CarouselButton from './CarouselButton';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import BaristaEdit from '../../assets/BB Barista edit.png'
import MainScreenEdit from '../../assets/BB Main Screen edit.png'
import ShopScreenEdit from '../../assets/BB Shop Screen edit.png'

import './Carousel.css';

const picturesList = [BaristaEdit, MainScreenEdit, ShopScreenEdit];

const Carousel = () => {

  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

  const onClickForward = () => {
    if (currentSlideIndex < picturesList.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    } else {
      setCurrentSlideIndex(0)
    }
  }

  const onClickBack = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    } else {
      setCurrentSlideIndex(picturesList.length)
    }
  }

  console.log("CURRENT PIC - "+ currentSlideIndex)

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <CarouselButton onClick={onClickBack}>
          <AiFillCaretLeft size="50px"/>
        </CarouselButton>
        <div className="carousel-image-container">
          <img src={picturesList[currentSlideIndex]} className='carousel-image'/>
        </div>
        <CarouselButton onClick={onClickForward}>
          <AiFillCaretRight size="50px"/>
        </CarouselButton>
      </div>
    </div>
  )
}

export default Carousel;