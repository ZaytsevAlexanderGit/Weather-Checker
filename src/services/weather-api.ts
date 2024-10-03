import {
  fake5DaysWeatherData,
  fakeDetailedWeatherData,
} from '../shared/consts/api-response.ts';

const appKey = '6d48fc9ec8ded6baefd7ecdcf1cfedd7';

export const get5DaysWeather = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appKey}&units=metric`
  );
  const data = await res.json();
  if (data.cod.toString() === '404') {
    console.log(data);
    return Promise.reject(data.message);
  }
  if (data.cod.toString() === '200') {
    console.log(data);
    return data;
  }
};

export const getDetailedWeather = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&&units=metric`
  );
  const data = await res.json();
  if (data.cod.toString() === '404') {
    console.log(data);
    return Promise.reject(data.message);
  }
  if (data.cod.toString() === '200') {
    console.log(data);
    return data;
  }
};

export const getFake5DaysWeather = () => {
  return fake5DaysWeatherData;
};

export const getFakeDetailedWeather = () => {
  return fakeDetailedWeatherData;
};
