import { TWeatherCard } from '../../shared/types/api-response.types.ts';
import { WeatherCard } from '../weather-card';
import styles from '../weather-cards-section/styles.module.css';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { WeatherCarousel } from '../weather-carousel';
import { useState } from 'react';

interface IWeatherCardsSection {
  data: TWeatherCard[];
}

export const WeatherCardsSection = ({ data }: IWeatherCardsSection) => {
  const data5Days = useWeather5Days((state) => state.data5Days);

  const [isShow, setIsShow] = useState('');

  const getData = (data: TWeatherCard) => {
    const dataForModal = data5Days.list.filter((item) =>
      item.dt_txt.includes(data.date)
    );
    const test = { ...data5Days };
    test.list = dataForModal;
    return test;
  };

  return (
    <>
      {data[0].date && (
        <ul className={styles.list}>
          {data.map((card) => (
            <li
              key={card.date}
              onClick={() => {
                if (isShow !== card.date) setIsShow(card.date);
                else setIsShow('');
              }}
              className={styles.listItem}
            >
              <WeatherCard data={card} />
              <WeatherCarousel
                data={getData(card)}
                isOpen={isShow === card.date}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
