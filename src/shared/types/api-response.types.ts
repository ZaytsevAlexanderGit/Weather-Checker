export type api5DaysWeatherListData = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds?: {
    all: number;
  };
  wind?: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    '3h': number;
  };
  sys?: {
    pod: string;
  };
  dt_txt: string;
};

export type api5DaysCityData = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type api5DaysResponseWeather = {
  cod: string;
  message: number;
  cnt: number;
  list: api5DaysWeatherListData[];
  city: api5DaysCityData;
};

export type apiDetailedWeatherData = {
  coord: {
    lat: number;
    lon: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind?: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    '1h': number;
  };
  clouds?: {
    all: number;
  };
  dt: number;
  pop?: number;
  sys?: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type TWeatherCard = {
  date: string;
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
  wind?: {
    speed: number;
    deg: number;
  };
  main: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
};
