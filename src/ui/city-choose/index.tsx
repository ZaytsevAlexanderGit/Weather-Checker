// import {
//   empty5DaysWeatherData,
//   emptyDetailedWeatherData,
// } from '../../shared/consts/api-response.ts';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';

// import styles from './styles.module.css';
import { Search } from '../../widgets';

export function CityChoose() {
  // const setData5Days = useWeather5Days((state) => state.set5DaysWeather);
  // const setDataDetailed = useWeatherDetailed(
  //   (state) => state.setDetailedWeather
  // );

  const get5DaysWeather = useWeather5Days((state) => state.get5DaysWeather);
  const getDetailedWeather = useWeatherDetailed(
    (state) => state.getDetailedWeather
  );

  // const set5DaysFakeWeather = useWeather5Days(
  //   (state) => state.set5DaysFakeWeather
  // );
  // const setDetailedFakeWeather = useWeatherDetailed(
  //   (state) => state.setDetailedFakeWeather
  // );

  const handleOnSearchChange = (searchData: {
    value: string;
    label: string;
  }) => {
    get5DaysWeather(searchData.label.split(',')[0]);
    getDetailedWeather(searchData.label.split(',')[0]);
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
        }}
      >
        <Search onSearchChange={handleOnSearchChange} />
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    setData5Days(empty5DaysWeatherData);*/}
        {/*    setDataDetailed(emptyDetailedWeatherData);*/}

        {/*    set5DaysFakeWeather();*/}
        {/*    setDetailedFakeWeather();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Fake Data*/}
        {/*</button>*/}
      </div>
    </>
  );
}
