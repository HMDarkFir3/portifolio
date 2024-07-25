import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { useCarousel } from '@/hooks/useCarousel';

interface SlidersDTO {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export function Carousel() {
  const [sliders, setSliders] = useState<SlidersDTO[]>([]);

  const {
    emblaMainRef,
    emblaThumbsRef,
    prevBtnDisabled,
    nextBtnDisabled,
    selectedThumbIndex,
    onPrevButtonClick,
    onNextButtonClick,
    onThumbClick,
  } = useCarousel({ opacity: 0.7, scale: 0.2 });

  function fetchSliders() {
    fetch('https://picsum.photos/v2/list', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setSliders(data);
      })
      .catch((error) => {
        console.error('Error fetching sliders:', error);
      });
  }

  useEffect(() => {
    fetchSliders();
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {sliders.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__number">
                <Image
                  className="embla__slide__image"
                  alt={slide.author}
                  src={slide.download_url}
                  width={slide.width}
                  height={slide.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {sliders.map((slide, index) => (
              <div
                key={slide.id}
                className={` ${selectedThumbIndex === index ? 'embla-thumbs__slide embla-thumbs__slide--selected' : 'embla-thumbs__slide embla-thumbs__slide--unselected'}`}
              >
                <button
                  onClick={() => onThumbClick(index)}
                  type="button"
                  className="embla-thumbs__slide__number"
                >
                  <Image
                    className="embla-thumbs__slide__image"
                    alt={slide.author}
                    src={slide.download_url}
                    width={slide.width}
                    height={slide.height}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className="embla__button embla__button--prev"
            type="button"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="embla__button__svg" />
          </button>

          <button
            className="embla__button embla__button--next"
            type="button"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="embla__button__svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
