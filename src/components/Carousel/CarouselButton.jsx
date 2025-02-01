import { Children } from "react";

const CarouselButton = ({onClick, children}) => {

  return (
    <button onClick={onClick} className='carousel-button button'>
      {children}
    </button>
  )
}

export default CarouselButton;