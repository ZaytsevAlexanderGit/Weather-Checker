import { create } from 'zustand';
import { apiDetailedWeatherData } from '../../shared/types/api-response.types.ts';
import {
  emptyDetailedWeatherData,
  fakeDetailedWeatherData,
} from '../../shared/consts/api-response.ts';
import { devtools } from 'zustand/middleware';

interface IWeatherDetailedState {
  dataDetailed: apiDetailedWeatherData;
  loading: boolean;
  error: string | null;
  setDetailedWeather: (data: apiDetailedWeatherData) => void;
  setDetailedFakeWeather: () => void;
  getDetailedWeather: (city: string) => void;
}

const appKey = import.meta.env.VITE_API_KEY;

export const useWeatherDetailed = create<IWeatherDetailedState>()(
  devtools((set) => ({
    dataDetailed: emptyDetailedWeatherData,
    loading: false,
    error: null,
    setDetailedWeather: (data: apiDetailedWeatherData) =>
      set({ dataDetailed: data }),
    setDetailedFakeWeather: () => {
      setTimeout(() => set({ dataDetailed: fakeDetailedWeatherData }), 1000);
    },
    getDetailedWeather: async (city: string) => {
      set({ loading: true });

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&&units=metric`
        );
        if (!res.ok) throw new Error('Failed to get Detailed Weather');
        const data = await res.json();
        if (data.cod.toString() === '404') {
          console.log(data);
          set({ error: data.message });
        }
        if (data.cod.toString() === '200') {
          console.log(data);
          set({ dataDetailed: data });
          set({ error: null });
        }
        // @ts-expect-error Error handling
      } catch (error: Error) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
