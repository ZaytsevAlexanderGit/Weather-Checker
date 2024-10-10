import {
  api5DaysWeatherListData,
  api5DaysCityData,
  api5DaysResponseWeather,
  apiDetailedWeatherData,
  TWeatherCard,
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

export const emptyWeatherData: TWeatherCard = {
  date: '',
  weather: [
    {
      description: '',
      icon: '',
    },
  ],
  main: {
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_min: 0,
    temp_max: 0,
  },
};

export const empty5DaysWeatherData: api5DaysResponseWeather = {
  cod: '',
  message: 0,
  cnt: 0,
  list: empty5DaysListData,
  city: empty5DaysCityData,
};

const fake5DaysCityData: api5DaysCityData = {
  id: 501183,
  name: 'Rostov',
  coord: {
    lat: 57.1914,
    lon: 39.4139,
  },
  country: 'RU',
  population: 33803,
  timezone: 10800,
  sunrise: 1728445388,
  sunset: 1728484540,
};

const fake5DaysListData: api5DaysWeatherListData[] = [
  {
    dt: 1728464400,
    main: {
      temp: 4.19,
      feels_like: 0.09,
      temp_min: 3.9,
      temp_max: 4.19,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 999,
      humidity: 89,
      temp_kf: 0.29,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.5,
      deg: 36,
      gust: 6.72,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 0.51,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-09 09:00:00',
  },
  {
    dt: 1728475200,
    main: {
      temp: 3.58,
      feels_like: -0.29,
      temp_min: 3.2,
      temp_max: 3.58,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 1001,
      humidity: 89,
      temp_kf: 0.38,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.72,
      deg: 45,
      gust: 5.76,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-09 12:00:00',
  },
  {
    dt: 1728486000,
    main: {
      temp: 2.76,
      feels_like: -1.03,
      temp_min: 2.76,
      temp_max: 2.76,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1002,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.23,
      deg: 48,
      gust: 6.24,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-09 15:00:00',
  },
  {
    dt: 1728496800,
    main: {
      temp: 2.5,
      feels_like: -1.39,
      temp_min: 2.5,
      temp_max: 2.5,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1002,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.29,
      deg: 66,
      gust: 6.79,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-09 18:00:00',
  },
  {
    dt: 1728507600,
    main: {
      temp: 2.61,
      feels_like: -1.05,
      temp_min: 2.61,
      temp_max: 2.61,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1002,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.96,
      deg: 79,
      gust: 6.72,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-09 21:00:00',
  },
  {
    dt: 1728518400,
    main: {
      temp: 2.84,
      feels_like: -0.58,
      temp_min: 2.84,
      temp_max: 2.84,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1003,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.67,
      deg: 86,
      gust: 6.16,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-10 00:00:00',
  },
  {
    dt: 1728529200,
    main: {
      temp: 2.98,
      feels_like: -0.53,
      temp_min: 2.98,
      temp_max: 2.98,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1003,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.85,
      deg: 100,
      gust: 6.65,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-10 03:00:00',
  },
  {
    dt: 1728540000,
    main: {
      temp: 3.51,
      feels_like: -0.43,
      temp_min: 3.51,
      temp_max: 3.51,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1003,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.82,
      deg: 116,
      gust: 6.38,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-10 06:00:00',
  },
  {
    dt: 1728550800,
    main: {
      temp: 5.91,
      feels_like: 2.66,
      temp_min: 5.91,
      temp_max: 5.91,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1003,
      humidity: 78,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.61,
      deg: 131,
      gust: 5.72,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-10 09:00:00',
  },
  {
    dt: 1728561600,
    main: {
      temp: 7.03,
      feels_like: 3.92,
      temp_min: 7.03,
      temp_max: 7.03,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1003,
      humidity: 74,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.89,
      deg: 132,
      gust: 5.97,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-10 12:00:00',
  },
  {
    dt: 1728572400,
    main: {
      temp: 6.07,
      feels_like: 2.64,
      temp_min: 6.07,
      temp_max: 6.07,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1003,
      humidity: 80,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.07,
      deg: 131,
      gust: 8.48,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-10 15:00:00',
  },
  {
    dt: 1728583200,
    main: {
      temp: 5.5,
      feels_like: 1.67,
      temp_min: 5.5,
      temp_max: 5.5,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 1004,
      humidity: 82,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.66,
      deg: 129,
      gust: 9.99,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-10 18:00:00',
  },
  {
    dt: 1728594000,
    main: {
      temp: 4.97,
      feels_like: 0.98,
      temp_min: 4.97,
      temp_max: 4.97,
      pressure: 1019,
      sea_level: 1019,
      grnd_level: 1004,
      humidity: 83,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.71,
      deg: 133,
      gust: 10.35,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-10 21:00:00',
  },
  {
    dt: 1728604800,
    main: {
      temp: 3.41,
      feels_like: -0.81,
      temp_min: 3.41,
      temp_max: 3.41,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 1005,
      humidity: 88,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.32,
      deg: 134,
      gust: 10.68,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-11 00:00:00',
  },
  {
    dt: 1728615600,
    main: {
      temp: 3.13,
      feels_like: -1.41,
      temp_min: 3.13,
      temp_max: 3.13,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 1005,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 5.85,
      deg: 132,
      gust: 11.96,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-11 03:00:00',
  },
  {
    dt: 1728626400,
    main: {
      temp: 4.63,
      feels_like: 0.24,
      temp_min: 4.63,
      temp_max: 4.63,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 1006,
      humidity: 80,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.47,
      deg: 139,
      gust: 12.55,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-11 06:00:00',
  },
  {
    dt: 1728637200,
    main: {
      temp: 7.93,
      feels_like: 4.04,
      temp_min: 7.93,
      temp_max: 7.93,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 1006,
      humidity: 66,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 7.78,
      deg: 143,
      gust: 10.34,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-11 09:00:00',
  },
  {
    dt: 1728648000,
    main: {
      temp: 9.61,
      feels_like: 6.35,
      temp_min: 9.61,
      temp_max: 9.61,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 1006,
      humidity: 61,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 82,
    },
    wind: {
      speed: 7.31,
      deg: 139,
      gust: 10.1,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-11 12:00:00',
  },
  {
    dt: 1728658800,
    main: {
      temp: 6.66,
      feels_like: 2.7,
      temp_min: 6.66,
      temp_max: 6.66,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 1007,
      humidity: 70,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 27,
    },
    wind: {
      speed: 6.83,
      deg: 132,
      gust: 12.84,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-11 15:00:00',
  },
  {
    dt: 1728669600,
    main: {
      temp: 5.31,
      feels_like: 0.91,
      temp_min: 5.31,
      temp_max: 5.31,
      pressure: 1023,
      sea_level: 1023,
      grnd_level: 1008,
      humidity: 65,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    clouds: {
      all: 24,
    },
    wind: {
      speed: 6.99,
      deg: 135,
      gust: 14.31,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-11 18:00:00',
  },
  {
    dt: 1728680400,
    main: {
      temp: 4.22,
      feels_like: -0.58,
      temp_min: 4.22,
      temp_max: 4.22,
      pressure: 1024,
      sea_level: 1024,
      grnd_level: 1009,
      humidity: 62,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    clouds: {
      all: 23,
    },
    wind: {
      speed: 7.24,
      deg: 136,
      gust: 15.03,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-11 21:00:00',
  },
  {
    dt: 1728691200,
    main: {
      temp: 3.48,
      feels_like: -1.48,
      temp_min: 3.48,
      temp_max: 3.48,
      pressure: 1025,
      sea_level: 1025,
      grnd_level: 1010,
      humidity: 60,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 41,
    },
    wind: {
      speed: 7.1,
      deg: 137,
      gust: 14.69,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-12 00:00:00',
  },
  {
    dt: 1728702000,
    main: {
      temp: 2.53,
      feels_like: -2.81,
      temp_min: 2.53,
      temp_max: 2.53,
      pressure: 1026,
      sea_level: 1026,
      grnd_level: 1011,
      humidity: 59,
      temp_kf: 0,
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
      all: 75,
    },
    wind: {
      speed: 7.37,
      deg: 137,
      gust: 15.18,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-12 03:00:00',
  },
  {
    dt: 1728712800,
    main: {
      temp: 3.7,
      feels_like: -1.4,
      temp_min: 3.7,
      temp_max: 3.7,
      pressure: 1027,
      sea_level: 1027,
      grnd_level: 1012,
      humidity: 55,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 78,
    },
    wind: {
      speed: 7.65,
      deg: 143,
      gust: 15.09,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-12 06:00:00',
  },
  {
    dt: 1728723600,
    main: {
      temp: 6.46,
      feels_like: 1.81,
      temp_min: 6.46,
      temp_max: 6.46,
      pressure: 1027,
      sea_level: 1027,
      grnd_level: 1012,
      humidity: 45,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 8.89,
      deg: 145,
      gust: 12.49,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-12 09:00:00',
  },
  {
    dt: 1728734400,
    main: {
      temp: 7.44,
      feels_like: 3.54,
      temp_min: 7.44,
      temp_max: 7.44,
      pressure: 1027,
      sea_level: 1027,
      grnd_level: 1012,
      humidity: 42,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 7.35,
      deg: 146,
      gust: 12.13,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-12 12:00:00',
  },
  {
    dt: 1728745200,
    main: {
      temp: 5.66,
      feels_like: 1.43,
      temp_min: 5.66,
      temp_max: 5.66,
      pressure: 1028,
      sea_level: 1028,
      grnd_level: 1013,
      humidity: 46,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.8,
      deg: 143,
      gust: 13.3,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-12 15:00:00',
  },
  {
    dt: 1728756000,
    main: {
      temp: 4.96,
      feels_like: 0.63,
      temp_min: 4.96,
      temp_max: 4.96,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1014,
      humidity: 50,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.55,
      deg: 147,
      gust: 13.48,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-12 18:00:00',
  },
  {
    dt: 1728766800,
    main: {
      temp: 4.22,
      feels_like: -0.18,
      temp_min: 4.22,
      temp_max: 4.22,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1014,
      humidity: 53,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.21,
      deg: 151,
      gust: 13.18,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-12 21:00:00',
  },
  {
    dt: 1728777600,
    main: {
      temp: 2.63,
      feels_like: -2.16,
      temp_min: 2.63,
      temp_max: 2.63,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1014,
      humidity: 60,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 6.1,
      deg: 146,
      gust: 12.91,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-13 00:00:00',
  },
  {
    dt: 1728788400,
    main: {
      temp: 1.63,
      feels_like: -3.32,
      temp_min: 1.63,
      temp_max: 1.63,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1015,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.86,
      deg: 151,
      gust: 13.32,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-13 03:00:00',
  },
  {
    dt: 1728799200,
    main: {
      temp: 2.9,
      feels_like: -1.93,
      temp_min: 2.9,
      temp_max: 2.9,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1015,
      humidity: 59,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 96,
    },
    wind: {
      speed: 6.38,
      deg: 155,
      gust: 13.4,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-13 06:00:00',
  },
  {
    dt: 1728810000,
    main: {
      temp: 7.51,
      feels_like: 3.58,
      temp_min: 7.51,
      temp_max: 7.51,
      pressure: 1030,
      sea_level: 1030,
      grnd_level: 1015,
      humidity: 43,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
    ],
    clouds: {
      all: 46,
    },
    wind: {
      speed: 7.5,
      deg: 167,
      gust: 10.68,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-13 09:00:00',
  },
  {
    dt: 1728820800,
    main: {
      temp: 8.71,
      feels_like: 5.46,
      temp_min: 8.71,
      temp_max: 8.71,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1015,
      humidity: 46,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 72,
    },
    wind: {
      speed: 6.42,
      deg: 162,
      gust: 10.47,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-13 12:00:00',
  },
  {
    dt: 1728831600,
    main: {
      temp: 6.45,
      feels_like: 2.91,
      temp_min: 6.45,
      temp_max: 6.45,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1014,
      humidity: 54,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 5.55,
      deg: 156,
      gust: 12.39,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-13 15:00:00',
  },
  {
    dt: 1728842400,
    main: {
      temp: 4.97,
      feels_like: 1.33,
      temp_min: 4.97,
      temp_max: 4.97,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1014,
      humidity: 62,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.94,
      deg: 154,
      gust: 12.68,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-13 18:00:00',
  },
  {
    dt: 1728853200,
    main: {
      temp: 3.87,
      feels_like: -0.12,
      temp_min: 3.87,
      temp_max: 3.87,
      pressure: 1029,
      sea_level: 1029,
      grnd_level: 1014,
      humidity: 55,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.09,
      deg: 154,
      gust: 12.14,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-13 21:00:00',
  },
  {
    dt: 1728864000,
    main: {
      temp: 2.39,
      feels_like: -1.63,
      temp_min: 2.39,
      temp_max: 2.39,
      pressure: 1028,
      sea_level: 1028,
      grnd_level: 1013,
      humidity: 50,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.46,
      deg: 152,
      gust: 10.95,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-14 00:00:00',
  },
  {
    dt: 1728874800,
    main: {
      temp: 1.8,
      feels_like: -2.44,
      temp_min: 1.8,
      temp_max: 1.8,
      pressure: 1027,
      sea_level: 1027,
      grnd_level: 1012,
      humidity: 50,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.6,
      deg: 153,
      gust: 11.19,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-10-14 03:00:00',
  },
  {
    dt: 1728885600,
    main: {
      temp: 3.58,
      feels_like: -0.53,
      temp_min: 3.58,
      temp_max: 3.58,
      pressure: 1027,
      sea_level: 1027,
      grnd_level: 1012,
      humidity: 44,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 98,
    },
    wind: {
      speed: 5.19,
      deg: 158,
      gust: 11.89,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-10-14 06:00:00',
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
    lon: 39.4139,
    lat: 57.1914,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 4.34,
    feels_like: 0.76,
    temp_min: 4.34,
    temp_max: 4.34,
    pressure: 1013,
    humidity: 88,
    sea_level: 1013,
    grnd_level: 998,
  },
  visibility: 10000,
  wind: {
    speed: 4.52,
    deg: 36,
    gust: 6.88,
  },
  clouds: {
    all: 100,
  },
  dt: 1728455083,
  sys: {
    country: 'RU',
    sunrise: 1728445388,
    sunset: 1728484540,
  },
  timezone: 10800,
  id: 501183,
  name: 'Rostov',
  cod: 200,
};
