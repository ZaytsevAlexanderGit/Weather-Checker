import { create } from 'zustand';
import { api5DaysResponseWeather } from '../../shared/types/api-response.types.ts';
import {
  empty5DaysWeatherData,
  fake5DaysWeatherData,
} from '../../shared/consts/api-response.ts';
import { devtools } from 'zustand/middleware';

interface IWeather5DaysState {
  data5Days: api5DaysResponseWeather;
  loading: boolean;
  error: string | null;
  set5DaysWeather: (data: api5DaysResponseWeather) => void;
  set5DaysFakeWeather: () => void;
  get5DaysWeather: (city: string) => void;
}

const appKey = import.meta.env.VITE_API_KEY;

export const useWeather5Days = create<IWeather5DaysState>()(
  devtools((set) => ({
    data5Days: empty5DaysWeatherData,
    loading: false,
    error: null,
    set5DaysWeather: (data: api5DaysResponseWeather) =>
      set({ data5Days: data }),
    set5DaysFakeWeather: () => {
      setTimeout(() => set({ data5Days: fake5DaysWeatherData }), 1000);
    },
    get5DaysWeather: async (city: string) => {
      set({ loading: true });

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appKey}&units=metric`
        );
        if (!res.ok) throw new Error('Failed to get 5 Days Weather');
        const data = await res.json();

        if (data.cod.toString() === '404') {
          console.log(data);
          set({ error: data.message });
        }
        if (data.cod.toString() === '200') {
          console.log(data);
          set({ data5Days: data });
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
