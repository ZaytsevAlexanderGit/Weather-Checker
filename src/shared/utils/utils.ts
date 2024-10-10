import {
  api5DaysResponseWeather,
  api5DaysWeatherListData,
  TWeatherCard,
} from '../types/api-response.types.ts';
import { emptyWeatherData } from '../consts/api-response.ts';

export const getWeatherDates = (
  dataDates: api5DaysResponseWeather
): Set<string> => {
  const dates: Set<string> = new Set();
  dataDates.list.forEach((item) => {
    if (!dates.has(item.dt_txt.slice(0, 10)))
      dates.add(item.dt_txt.slice(0, 10));
  });
  return dates;
};

export const getAverageWeatherData = (
  dataForAverage: api5DaysWeatherListData[]
): TWeatherCard => {
  const toAdd: TWeatherCard = JSON.parse(JSON.stringify(emptyWeatherData));

  if (dataForAverage[0].dt_txt !== '') {
    toAdd.date = dataForAverage[0].dt_txt.slice(0, 10);
  }

  const descriptionCurrent: string[] = [];
  const iconCurrent: string[] = [];
  let humidityCurrent: number = 0;
  let pressureCurrent: number = 0;
  let tempCurrent: number = 0;
  let temp_minCurrent: number = Number.POSITIVE_INFINITY;
  let temp_maxCurrent: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < dataForAverage.length; i++) {
    descriptionCurrent.push(dataForAverage[i].weather[0].description);
    iconCurrent.push(dataForAverage[i].weather[0].icon);
    humidityCurrent += dataForAverage[i].main.humidity;
    pressureCurrent += dataForAverage[i].main.pressure;
    tempCurrent += dataForAverage[i].main.temp;
    if (dataForAverage[i].main.temp_min < temp_minCurrent)
      temp_minCurrent = dataForAverage[i].main.temp_min;
    if (dataForAverage[i].main.temp_max > temp_maxCurrent)
      temp_maxCurrent = dataForAverage[i].main.temp_max;
  }
  toAdd.weather[0].description = descriptionCurrent
    .sort(
      (a, b) =>
        descriptionCurrent.filter((v) => v === a).length -
        descriptionCurrent.filter((v) => v === b).length
    )
    .pop()!;
  toAdd.weather[0].icon = iconCurrent
    .sort(
      (a, b) =>
        iconCurrent.filter((v) => v === a).length -
        iconCurrent.filter((v) => v === b).length
    )
    .pop()!;
  toAdd.main.humidity = Math.round(humidityCurrent / dataForAverage.length);
  toAdd.main.pressure = Math.round(
    (pressureCurrent / dataForAverage.length) * 0.75006375541921
  );
  toAdd.main.temp = Math.round(tempCurrent / dataForAverage.length);
  toAdd.main.temp_min = -(-temp_minCurrent.toFixed(1));
  toAdd.main.temp_max = -(-temp_maxCurrent.toFixed(1));

  return toAdd;
};

export const getWeatherCardsData = (
  data: api5DaysResponseWeather
): TWeatherCard[] => {
  const weatherCards: TWeatherCard[] = [];
  const dates = getWeatherDates(data);
  for (const date of dates) {
    const dateWeather = data.list.filter((item) => item.dt_txt.includes(date));
    weatherCards.push(getAverageWeatherData(dateWeather));
  }
  return weatherCards;
};

export const getDirection = (deg: number): string | undefined => {
  if (deg === 0) return 'С';
  if (deg > 0 && deg < 45) return 'CСВ';
  if (deg === 45) return 'CВ';
  if (deg > 45 && deg < 90) return 'ВСВ';
  if (deg === 90) return 'В';
  if (deg > 90 && deg < 135) return 'ВЮВ';
  if (deg === 135) return 'ЮВ';
  if (deg > 135 && deg < 180) return 'ЮЮВ';
  if (deg === 180) return 'Ю';
  if (deg > 180 && deg < 225) return 'ЮЮЗ';
  if (deg === 225) return 'ЮЗ';
  if (deg > 225 && deg < 270) return 'ЗЮЗ';
  if (deg === 270) return 'З';
  if (deg > 270 && deg < 315) return 'ЗСЗ';
  if (deg === 315) return 'СЗ';
  if (deg > 315 && deg < 360) return 'ССЗ';
};
