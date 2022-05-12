import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, CardSection, SliderContainer, LeftArrow, RightArrow } from './CardCarouselStyles';
import Link from 'next/link';
import ServiceButton from '../../../../styles/GlobalComponents/ServiceButton'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../../styles/GlobalComponents';
import { ResourceData } from '../../../../constants/ResourceHubContstants';


const CardSliders = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Section>

      <SliderContainer>
        <LeftArrow>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        </LeftArrow>
        <RightArrow>
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        </RightArrow>

        {ResourceData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (

                <CarouselItem>

                  <CarouselItemTitle>{slide.title}</CarouselItemTitle>
                  <CarouselItemText>{slide.text}</CarouselItemText>

                </CarouselItem>


              )}
            </div>
          );
        })}

      </SliderContainer>
    </Section>
  );
};

export default function CardSlider() {
  return (

    <CardSliders slides={ResourceData} />



  )
}


