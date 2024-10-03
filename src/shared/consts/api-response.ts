import {
  api5DaysWeatherListData,
  api5DaysCityData,
  api5DaysResponseWeather,
  apiDetailedWeatherData,
} from '../types/api-response.types.ts';

const empty5DaysCityData: api5DaysCityData = {
  id: 0,
  name: '',
  coord: {
    lat: 0,
    lon: 0,
  },
  country: '',
  population: 0,
  timezone: 0,
  sunrise: 0,
  sunset: 0,
};

const empty5DaysListData: api5DaysWeatherListData[] = [
  {
    dt: 0,
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      sea_level: 0,
      grnd_level: 0,
      humidity: 0,
      temp_kf: 0,
    },
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    visibility: 0,
    pop: 0,
    rain: {
      '3h': 0,
    },
    sys: {
      pod: '',
    },
    dt_txt: '',
  },
];

export const empty5DaysWeatherData: api5DaysResponseWeather = {
  cod: '',
  message: 0,
  cnt: 0,
  list: empty5DaysListData,
  city: empty5DaysCityData,
};

const fake5DaysCityData: api5DaysCityData = {
  id: 52491,
  name: 'Moscow',
  coord: {
    lat: 55.7522,
    lon: 37.6156,
  },
  country: 'RU',
  population: 1000000,
  timezone: 10800,
  sunrise: 1727840075,
  sunset: 1727881371,
};

const fake5DaysListData: api5DaysWeatherListData[] = [
  {
    dt: 1727892000,
    main: {
      temp: 15.59,
      feels_like: 13.96,
      temp_min: 15.34,
      temp_max: 15.59,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 999,
      humidity: 29,
      temp_kf: 0.25,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 54,
    },
    wind: {
      speed: 2.9,
      deg: 151,
      gust: 9.58,
    },
    visibility: 10000,
    pop: 0,
    dt_txt: '2024-10-02 18:00:00',
  },
];

export const fake5DaysWeatherData: api5DaysResponseWeather = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: fake5DaysListData,
  city: fake5DaysCityData,
};

export const emptyDetailedWeatherData: apiDetailedWeatherData = {
  coord: {
    lat: 0,
    lon: 0,
  },
  weather: [
    {
      id: 0,
      main: '',
      description: '',
      icon: '',
    },
  ],
  base: '',
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  rain: {
    '1h': 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: '',
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: '',
  cod: 0,
};

export const fakeDetailedWeatherData: apiDetailedWeatherData = {
  coord: {
    lon: 7.367,
    lat: 45.133,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 284.2,
    feels_like: 282.93,
    temp_min: 283.06,
    temp_max: 286.82,
    pressure: 1021,
    humidity: 60,
    sea_level: 1021,
    grnd_level: 910,
  },
  visibility: 10000,
  wind: {
    speed: 4.09,
    deg: 121,
    gust: 3.47,
  },
  rain: {
    '1h': 2.73,
  },
  clouds: {
    all: 83,
  },
  dt: 1726660758,
  sys: {
    type: 1,
    id: 6736,
    country: 'IT',
    sunrise: 1726636384,
    sunset: 1726680975,
  },
  timezone: 7200,
  id: 3165523,
  name: 'Province of Turin',
  cod: 200,
};
