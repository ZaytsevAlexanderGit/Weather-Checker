// import styles from './styles.module.css';
import { useMediaQuery } from '../../shared/hooks';
import { Breakpoints } from '../../shared/config';
import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';

export function MapPage() {
  const detailedWeather = useWeatherDetailed((state) => state.dataDetailed);
  let source = '';
  const corner = 0.05;
  source = `https://www.openstreetmap.org/export/embed.html?bbox=${detailedWeather.coord.lon - corner}%2C${detailedWeather.coord.lat - corner}%2C${detailedWeather.coord.lon + corner}%2C${detailedWeather.coord.lat + corner}&layer=mapnik`;
  const isMobile = useMediaQuery(Breakpoints.L);

  return (
    <div>
      {detailedWeather.name && (
        <>
          <h1 style={{ fontSize: '1.5rem', lineHeight: '1.25' }}>
            Карта города {detailedWeather.name}
          </h1>
          <iframe width="100%" height="400" src={source}></iframe>
        </>
      )}
      {!detailedWeather.name && isMobile && (
        <>
          <h1 className="text text_size_large .text_type_bold">
            Сначала выберете город
          </h1>
        </>
      )}
    </div>
  );
}
