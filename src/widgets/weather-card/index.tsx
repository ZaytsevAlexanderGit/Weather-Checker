import { TWeatherCard } from '../../shared/types/api-response.types.ts';
import styles from '../weather-card/styles.module.css';
import { capitalizeFirst } from '../../shared/utils/utils.ts';

interface IWeatherCard {
  data: TWeatherCard;
}

export const WeatherCard = ({ data }: IWeatherCard) => {
  const options: Intl.DateTimeFormat = {
    // @ts-expect-error options
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__data}>
          <div className={styles.card__data_date}>
            <h2 className={styles.header}>
              {new Date(data.date.slice(0, 10))
                // @ts-expect-error options
                .toLocaleDateString('ru', options)
                .split(',')[1]
                .split(' ')[1] +
                ' ' +
                capitalizeFirst(
                  new Date(data.date.slice(0, 10))
                    // @ts-expect-error options
                    .toLocaleDateString('ru', options)
                    .split(',')[1]
                    .split(' ')[2]
                )}
            </h2>
            <h2 className={styles.header__day}>
              {capitalizeFirst(
                new Date(data.date.slice(0, 10))
                  // @ts-expect-error options
                  .toLocaleDateString('ru', options)
                  .split(',')[0]
              )}
            </h2>
          </div>
          <img
            className={styles.image}
            src={`./${data.weather[0].icon}.svg`}
            alt="Погода"
          />
          <div className={styles.card__data_main}>
            <p className={styles.card__data_main_text}>
              Температура:&nbsp;<strong>{data.main.temp}</strong>
              &nbsp;&deg;C (<strong>{data.main.temp_min}</strong>
              &nbsp;&mdash;&nbsp;<strong>{data.main.temp_max}</strong>
              )&nbsp;&deg;C
            </p>
            <p className={styles.card__data_main_text}>
              Давление: <strong>{data.main.pressure}</strong>
              &nbsp;мм.рт.ст.
            </p>
            <p className={styles.card__data_main_text}>
              Влажность: <strong>{data.main.humidity}</strong>%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
