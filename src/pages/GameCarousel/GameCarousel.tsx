import React from 'react';
import { Card } from 'antd';
import data from "../../utils/data.json";
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const GameCarousel: React.FC = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <div className="carousel-text">
        <h2 className='title-new'>LO MÁS NUEVO</h2>
      </div>
      <Card>
      <Slider {...settings} className="carousel">
        {data.dataJuegos.map((juego, index) => (
          <div key={index} className="carousel-slide">
            <img src={juego.image} alt={juego.titulo} className="carousel-image" />
            
          </div>
        ))}
      </Slider>
      </Card>
      
    </div>
  );
};

export default GameCarousel;