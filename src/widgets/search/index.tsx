import { AsyncPaginate } from 'react-select-async-paginate';
import { SetStateAction, useState } from 'react';

// import styles from './styles.module.css';

const appKey = import.meta.env.VITE_API_REQUEST_KEY;

// @ts-ignore

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue: string) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': appKey,
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          // @ts-ignore
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData: SetStateAction<string>) => {
    // @ts-ignore
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      styles={{
        // @ts-ignore
        control: (provided, state) => ({
          ...provided,
          inlineSize: '80%',
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
          inlineSize: '80%',
          marginLeft: '10%',
        }),
        // @ts-ignore
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#A1A5A5' : null,
          color: 'black',
        }),
      }}
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      // @ts-ignore
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
