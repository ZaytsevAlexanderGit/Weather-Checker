import { useEffect } from 'react';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';

type ErrorBoundaryProps = {
  children: JSX.Element | JSX.Element[];
};

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const error5Days = useWeather5Days((state) => state.error);
  const errorDetailed = useWeatherDetailed((state) => state.error);
  useEffect(() => {
    if (error5Days || errorDetailed != null) {
      console.log('ERROR');
    }
  }, [errorDetailed, error5Days]);

  return <>{children}</>;
};

export default ErrorBoundary;
