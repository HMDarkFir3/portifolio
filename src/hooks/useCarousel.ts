import { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaEventType, EngineType } from 'embla-carousel';

interface OptionsProps {
  opacity: number;
  scale: number;
}

export const useCarousel = (options: OptionsProps) => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);
  const [selectedDotIndex, setSelectedDotIndex] = useState<number>(0);
  const [selectedThumbIndex, setSelectedThumbIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const tweenNodes = useRef<HTMLElement[]>([]);
  const tweenFactors = useRef({
    opacity: options.opacity,
    scale: options.scale,
  });

  const onButtonClick = useCallback(
    (direction: 'prev' | 'next') => {
      if (!emblaMainApi) return;

      direction === 'prev'
        ? emblaMainApi.scrollPrev()
        : emblaMainApi.scrollNext();
    },
    [emblaMainApi],
  );

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi],
  );

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const updateCarouselState = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    setPrevBtnDisabled(!emblaMainApi.canScrollPrev());
    setNextBtnDisabled(!emblaMainApi.canScrollNext());
    setScrollSnaps(emblaMainApi.scrollSnapList());
    setSelectedDotIndex(emblaMainApi.selectedScrollSnap());
    setSelectedThumbIndex(emblaMainApi.selectedScrollSnap());

    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());

    tweenFactors.current.opacity =
      options.opacity * emblaMainApi.scrollSnapList().length;
    tweenFactors.current.scale =
      options.scale * emblaMainApi.scrollSnapList().length;
  }, [emblaMainApi, emblaThumbsApi, options.opacity, options.scale]);

  const applyTween = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine: EngineType = emblaApi.internalEngine();
      const scrollProgress: number = emblaApi.scrollProgress();
      const slidesInView: number[] = emblaApi.slidesInView();
      const isScrollEvent: boolean = eventName === 'scroll';

      emblaApi
        .scrollSnapList()
        .forEach((scrollSnap: number, snapIndex: number) => {
          let diffToTarget: number = scrollSnap - scrollProgress;
          const slidesInSnap: number[] = engine.slideRegistry[snapIndex];

          slidesInSnap.forEach((slideIndex: number) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((loopItem) => {
                const target: number = loopItem.target();

                if (slideIndex === loopItem.index && target !== 0) {
                  const sign: number = Math.sign(target);

                  if (sign === -1) {
                    diffToTarget = scrollSnap - (1 + scrollProgress);
                  }
                  if (sign === 1) {
                    diffToTarget = scrollSnap + (1 - scrollProgress);
                  }
                }
              });
            }

            // Opacity
            const tweenValueOpacity: number =
              1 - Math.abs(diffToTarget * tweenFactors.current.opacity);
            const opacity: string = numberWithinRange(
              tweenValueOpacity,
              0,
              1,
            ).toString();
            emblaApi.slideNodes()[slideIndex].style.opacity = opacity;

            // Scale
            tweenNodes.current = emblaApi
              .slideNodes()
              .map((slideNode: HTMLElement) => {
                return slideNode.querySelector(
                  '.embla__slide__number',
                ) as HTMLElement;
              });

            const tweenValueScale: number =
              1 - Math.abs(diffToTarget * tweenFactors.current.scale);
            const scale: string = numberWithinRange(
              tweenValueScale,
              0,
              1,
            ).toString();
            const tweenNodeScale: HTMLElement = tweenNodes.current[slideIndex];
            tweenNodeScale.style.transform = `scale(${scale})`;
          });
        });
    },
    [],
  );

  const numberWithinRange = useCallback(
    (number: number, min: number, max: number): number =>
      Math.min(Math.max(number, min), max),
    [],
  );

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    updateCarouselState();
    applyTween(emblaMainApi);

    emblaMainApi
      .on('reInit', (emblaApi: EmblaCarouselType) => {
        updateCarouselState();
        applyTween(emblaApi);
      })
      .on('select', updateCarouselState)
      .on('scroll', applyTween)
      .on('slideFocus', applyTween);

    return () => {
      emblaMainApi
        .off('reInit', (emblaApi: EmblaCarouselType) => {
          updateCarouselState();
          applyTween(emblaApi);
        })
        .off('select', updateCarouselState)
        .off('scroll', applyTween)
        .off('slideFocus', applyTween);
    };
  }, [emblaMainApi, emblaThumbsApi, updateCarouselState, applyTween]);

  return {
    emblaMainRef,
    emblaThumbsRef,
    prevBtnDisabled,
    nextBtnDisabled,
    selectedDotIndex,
    selectedThumbIndex,
    scrollSnaps,
    onPrevButtonClick: () => onButtonClick('prev'),
    onNextButtonClick: () => onButtonClick('next'),
    onDotButtonClick,
    onThumbClick,
  };
};
