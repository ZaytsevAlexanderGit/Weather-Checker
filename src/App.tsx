import { useState } from 'react';
import * as WeatherIcons from 'weather-icons-react';
import './App.css';
import {
  empty5DaysWeatherData,
  emptyDetailedWeatherData,
  fake5DaysWeatherData,
  fakeDetailedWeatherData,
} from './shared/consts/api-response.ts';
import ErrorBoundary from './features/error-boundary';
import { useWeather5Days } from './assets/stores/weather-5-days.ts';
import { useWeatherDetailed } from './assets/stores/weather-detailed.ts';
import { AppRoutes } from './assets/routing';

function App() {
  const data5Days = useWeather5Days((state) => state.data5Days);
  const dataDetailed = useWeatherDetailed((state) => state.dataDetailed);

  const setData5Days = useWeather5Days((state) => state.set5DaysWeather);
  const setDataDetailed = useWeatherDetailed(
    (state) => state.setDetailedWeather
  );

  const get5DaysWeather = useWeather5Days((state) => state.get5DaysWeather);
  const getDetailedWeather = useWeatherDetailed(
    (state) => state.getDetailedWeather
  );

  const set5DaysFakeWeather = useWeather5Days(
    (state) => state.set5DaysFakeWeather
  );
  const setDetailedFakeWeather = useWeatherDetailed(
    (state) => state.setDetailedFakeWeather
  );

  const error5Days = useWeather5Days((state) => state.error);
  const errorDetailed = useWeatherDetailed((state) => state.error);

  const [cityName, setCityName] = useState<string>('');

  return (
    <ErrorBoundary>
      <>
        {error5Days && <p>{error5Days}</p>}
        {errorDetailed && <p>{errorDetailed}</p>}
        {!error5Days && <p>{data5Days.city.name}</p>}
        {!errorDetailed && <p>{dataDetailed.name}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            value={cityName}
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          />
          <div className="card">
            <button
              onClick={() => {
                setData5Days(empty5DaysWeatherData);
                setDataDetailed(emptyDetailedWeatherData);

                // get5DaysWeather(cityName);
                // getDetailedWeather(cityName);

                set5DaysFakeWeather();
                setDetailedFakeWeather();
              }}
            >
              Get city Weather
            </button>
          </div>
        </form>
        <AppRoutes />
        {/*<WeatherIcons.WiDayThunderstorm size={48} color="#" />*/}
      </>
    </ErrorBoundary>
  );
}

export default App;
