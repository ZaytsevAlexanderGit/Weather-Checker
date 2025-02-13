import { FC, ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';

interface MainWrapperProps {
  children?: ReactNode;
  extClassName?: string;
}

export const MainWrapper: FC<MainWrapperProps> = ({
  children,
  extClassName,
}) => {
  const get5DaysWeather = useWeather5Days((state) => state.get5DaysWeather);
  const getDetailedWeather = useWeatherDetailed(
    (state) => state.getDetailedWeather
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          get5DaysWeather(data.address.city);
          getDetailedWeather(data.address.city);
        });
    });
  }, []);

  return (
    <div className={classnames`${styles.wrapper} ${extClassName}`}>
      {children}
    </div>
  );
};
