import { MouseEvent, useRef, useState, WheelEvent } from 'react';
import styles from '../../widgets/weather-carousel/styles.module.css';
import { api5DaysResponseWeather } from '../../shared/types/api-response.types.ts';

interface IWeatherCarouselProps {
  data: api5DaysResponseWeather;
  isOpen: boolean;
}

export const WeatherCarousel = ({ data, isOpen }: IWeatherCarouselProps) => {
  const itemsRef = useRef<HTMLUListElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -itemsRef.current!.offsetLeft);
    setScrollLeft(itemsRef.current!.scrollLeft);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current!.offsetLeft;
    const walk = (x - startX) * 0.75;
    itemsRef.current!.scrollLeft = scrollLeft - walk;
  };
  const handleMouseLeave = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsMouseDown(false);
  };
  const handleMouseUp = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsMouseDown(false);
  };

  const handleWheel = (e: WheelEvent) => {
    itemsRef.current!.scrollLeft = scrollLeft + e.deltaY / 2.5;
    setScrollLeft(itemsRef.current!.scrollLeft);
  };

  return (
    <>
      {data.city.name && (
        <ul
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'all  0.3s ease-in-out, opacity 0.6s ease-in-out',
            height: isOpen
              ? 'clamp(5.25rem, 1.938rem + 7.8vi, 6.813rem)'
              : '0px',
            marginTop: isOpen ? '16px' : '0px',
          }}
          className={styles.list}
          ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
          {data.list.map((item) => (
            <li className={styles.listItem} key={item.dt_txt}>
              <p className={styles.carousel__text}>
                {item.dt_txt.slice(11, -3)}
              </p>
              <img
                className={styles.image}
                src={`public/images/${item.weather[0].icon}.svg`}
                // src={`/images/${item.weather[0].icon}.svg`}
                // src={`/${item.weather[0].icon}.svg`}
              />
              <p className={styles.carousel__text}>
                {-(-item.main.temp.toFixed(1))}&nbsp;&deg;C
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
