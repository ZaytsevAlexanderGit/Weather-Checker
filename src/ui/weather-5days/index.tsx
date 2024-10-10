import { WeatherCardsSection } from '../../widgets';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from '../../ui/weather-5days/styles.module.css';
import { getWeatherCardsData } from '../../shared/utils/utils.ts';

export function Weather5Days() {
  const data5Days = useWeather5Days((state) => state.data5Days);

  const dataLoaded = useWeather5Days((state) => state.loading);
  const error5Days = useWeather5Days((state) => state.error);

  return dataLoaded === true ? (
    <div className={styles.loader}>
      <ClipLoader
        color="#FFF"
        loading={dataLoaded}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <>
      {error5Days && <p>{error5Days}</p>}
      {data5Days.city.name && (
        <h1 className={styles.header}>Прогноз на ближайшие дни</h1>
      )}
      <WeatherCardsSection data={getWeatherCardsData(data5Days)} />
    </>
  );
}
