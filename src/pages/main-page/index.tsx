import { CityChoose, Weather5Days } from '../../ui';

import styles from './styles.module.css';
import { WeatherDetailed } from '../../ui/weather-detailed';
import { MapPage } from '../map-page';
import { useMediaQuery } from '../../shared/hooks';
import { Breakpoints } from '../../shared/config';
import { useState } from 'react';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';
import ClipLoader from 'react-spinners/ClipLoader';

export function MainPage() {
  const data5Days = useWeather5Days((state) => state.data5Days);
  const dataLoaded = useWeatherDetailed((state) => state.loading);
  const errorDetailed = useWeatherDetailed((state) => state.error);

  const isMobile = useMediaQuery(Breakpoints.L);
  const [isDetailed, setIsDetailed] = useState<boolean>(true);

  return (
    <div className={styles.main}>
      <CityChoose />

      {dataLoaded && (
        <div className={styles.loader}>
          <ClipLoader
            color="#FFF"
            loading={dataLoaded}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!dataLoaded && data5Days.city.name && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '20px',
            inlineSize: '90%',
            margin: '0 auto',
          }}
        >
          <button
            className={styles.button__choose}
            onClick={() => setIsDetailed(true)}
          >
            Сегодня
          </button>
          <button
            className={styles.button__choose}
            onClick={() => setIsDetailed(false)}
          >
            Прогноз
          </button>
        </div>
      )}
      {!dataLoaded && isDetailed && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              !isMobile && !errorDetailed ? 'repeat(2, 1fr)' : ' 1fr',
            gap: !isMobile ? '10px' : '0',
          }}
        >
          <WeatherDetailed />
          {!isMobile && !errorDetailed && <MapPage />}
        </div>
      )}
      {!dataLoaded && !isDetailed && <Weather5Days />}
    </div>
  );
}
