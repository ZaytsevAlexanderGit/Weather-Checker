// import styles from './styles.module.css';
import { useWeather5Days } from '../../assets/stores/weather-5-days.ts';
import { useMediaQuery } from '../../shared/hooks';
import { Breakpoints } from '../../shared/config';

export function MapPage() {
  const data5days = useWeather5Days((state) => state.data5Days);
  let source = '';
  const corner = 0.05;
  source = `https://www.openstreetmap.org/export/embed.html?bbox=${data5days.city.coord.lon - corner}%2C${data5days.city.coord.lat - corner}%2C${data5days.city.coord.lon + corner}%2C${data5days.city.coord.lat + corner}&layer=mapnik`;
  const isMobile = useMediaQuery(Breakpoints.L);

  return (
    <div>
      {data5days.city.name && (
        <>
          <h1 style={{ fontSize: '1.5rem', lineHeight: '1.25' }}>
            Карта города {data5days.city.name}
          </h1>
          <iframe width="100%" height="400" src={source}></iframe>
        </>
      )}
      {!data5days.city.name && isMobile && (
        <>
          <h1 className="text text_size_large .text_type_bold">
            Сначала выберете город
          </h1>
        </>
      )}
    </div>
  );
}
