import { TWeatherCard } from '../../shared/types/api-response.types.ts';
import { WeatherCard } from '../weather-card';
import styles from '../weather-cards-section/styles.module.css';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { WeatherCarousel } from '../weather-carousel';
import { useState } from 'react';
import { motion } from 'motion/react';

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

  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.1 * i,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      {data[0].date && (
        <ul className={styles.list}>
          {data.map((card, i) => (
            <motion.li
              variants={listVariants}
              key={card.date}
              animate="visible"
              initial="hidden"
              custom={i}
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
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};
