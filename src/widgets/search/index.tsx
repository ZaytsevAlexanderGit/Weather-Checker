import { AsyncPaginate } from 'react-select-async-paginate';
import { SetStateAction, useState } from 'react';

// import styles from './styles.module.css';

// const tokenWFTKey = import.meta.env.VITE_API_WFT_REQUEST_KEY;
// const tokenDaData = import.meta.env.VITE_API_DADATA_REQUEST_KEY;
const tokenGeoApify = import.meta.env.VITE_API_GEOAPIFY_REQUEST_KEY;

// @ts-expect-error not defined
export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  async function loadOptionsGeoApify(searchQuery: string) {
    if (!searchQuery || searchQuery.length < 3) {
      return { options: [], hasMore: false };
    }

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchQuery}&apiKey=${tokenGeoApify}`
    );

    const data = await response.json();

    const options = data.features
      .map(
        (item: {
          geometry: { coordinates: number[] };
          properties: { city: string; country: string };
        }) => ({
          value: `${item.geometry.coordinates[0]} ${item.geometry.coordinates[1]}`,
          label: `${item.properties.city}, ${item.properties.country}`,
        })
      )
      .filter(
        (item: { value: string; label: string }) =>
          !item.value.includes('undefined') && !item.label.includes('undefined')
      );

    const uniqueOptions = [
      ...new Map(
        options.map((item: { value: string; label: string }) => [
          item.label,
          item,
        ])
      ).values(),
    ];

    return {
      options: uniqueOptions,
      hasMore: false,
    };
  }

  // const loadOptionsDaData = (inputValue: string) => {
  //   return fetch(
  //     `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
  //     {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         Authorization: 'Token ' + tokenDaData,
  //       },
  //       body: JSON.stringify({ query: inputValue }),
  //     }
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       const options = response.suggestions
  //         .map((option) => {
  //           return {
  //             value: `${option.data.geo_lat} ${option.data.geo_lon}`,
  //             label: `${option.data.city}, ${option.data.country}`,
  //           };
  //         })
  //         .filter(
  //           (element) =>
  //             !element.value.includes('null') && !element.label.includes('null')
  //         );
  //       const uniqueOptions = [
  //         ...new Map(options.map((item) => [item.label, item])).values(),
  //       ];
  //       return {
  //         // @ts-ignore
  //         options: uniqueOptions,
  //       };
  //     })
  //     .catch((error) => console.log('error', error));
  // };

  // const loadOptionsWFT = (inputValue: string) => {
  //   return fetch(
  //     `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': tokenWFTKey,
  //         'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return {
  //         // @ts-ignore
  //         options: response.data.map((city) => {
  //           return {
  //             value: `${city.latitude} ${city.longitude}`,
  //             label: `${city.name}, ${city.country}`,
  //           };
  //         }),
  //       };
  //     });
  // };

  const handleOnChange = (searchData: SetStateAction<string>) => {
    // @ts-expect-error not defined
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      styles={{
        // @ts-expect-error not defined
        control: (provided, state) => ({
          ...provided,
          inlineSize: '90%',
          margin: '0 auto',
          textAlign: 'left',
          borderRadius: '8px',
          border: '2px solid #ccc',
          color: 'white',
          background: '#fff',
          boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
        }),
        menu: (provided) => ({
          ...provided,
          inlineSize: '90%',
          marginLeft: '5%',
        }),
        // @ts-expect-error not defined
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#A1A5A5' : null,
          color: 'black',
        }),
      }}
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      cacheUniqs={[search]}
      // @ts-expect-error not defined
      onChange={handleOnChange}
      // loadOptions={loadOptionsWFT}
      // loadOptions={loadOptionsDaData}
      loadOptions={loadOptionsGeoApify}
    />
  );
};
