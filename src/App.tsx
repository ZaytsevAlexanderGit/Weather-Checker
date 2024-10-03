import { useState } from 'react';
import './App.css';
import {
  api5DaysResponseWeather,
  apiDetailedWeatherData,
} from './shared/types/api-response.types.ts';
import {
  empty5DaysWeatherData,
  emptyDetailedWeatherData,
  fake5DaysWeatherData,
  fakeDetailedWeatherData,
} from './shared/consts/api-response.ts';
import ErrorBoundary from './features/error-boundary';
import { get5DaysWeather, getDetailedWeather } from './services/weather-api.ts';
import { useWeather5Days } from './stores/weather-5-days.ts';
import { useWeatherDetailed } from './stores/weather-detailed.ts';

function App() {
  const data5Days = useWeather5Days((state) => state.data5Days);
  const dataDetailed = useWeatherDetailed((state) => state.dataDetailed);

  const setData5Days = useWeather5Days((state) => state.set5DaysWeather);
  const setDataDetailed = useWeatherDetailed(
    (state) => state.setDetailedWeather
  );

  const get5DaysWeatherZ = useWeather5Days((state) => state.get5DaysWeather);

  const [cityName, setCityName] = useState<string>('');

  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const appKey = import.meta.env.API_KEY;
  console.log(appKey);

  return (
    <ErrorBoundary>
      <>
        {isError && <p>{error}</p>}
        {!isError && <p>{data5Days.city.name}</p>}
        {!isError && <p>{dataDetailed.name}</p>}
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

              get5DaysWeatherZ(cityName);

              // get5DaysWeather(cityName)
              //   .then((data) => {
              //     setError('');
              //     setIsError(false);
              //     setData5Days(data);
              //   })
              //   .catch((err) => {
              //     setError(err);
              //     setIsError(true);
              //   });

              getDetailedWeather(cityName)
                .then((data) => {
                  setError('');
                  setIsError(false);
                  setDataDetailed(data);
                })
                .catch((err) => {
                  setError(err);
                  setIsError(true);
                });

              // setTimeout(() => {
              //   console.log(cityName);
              //   setData5Days(getFake5DaysWeather());
              // }, 1000);

              // setTimeout(() => {
              //   console.log(cityName);
              //   setDataDetailed(getFakeDetailedWeather());
              // }, 1000);
            }}
          >
            Get city Weather
          </button>
        </div>
      </>
    </ErrorBoundary>
  );
}

export default App;
