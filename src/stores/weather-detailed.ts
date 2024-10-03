import { create } from 'zustand';
import { apiDetailedWeatherData } from '../shared/types/api-response.types.ts';
import { emptyDetailedWeatherData } from '../shared/consts/api-response.ts';
import { devtools } from 'zustand/middleware';

interface IWeatherDetailedState {
  dataDetailed: apiDetailedWeatherData;
  loading: boolean;
  error: string | null;
  setDetailedWeather: (data: apiDetailedWeatherData) => void;
}

export const useWeatherDetailed = create<IWeatherDetailedState>()(
  devtools((set) => ({
    dataDetailed: emptyDetailedWeatherData,
    loading: false,
    error: null,
    setDetailedWeather: (data: apiDetailedWeatherData) =>
      set(() => {
        return { dataDetailed: data };
      }),
  }))
);
