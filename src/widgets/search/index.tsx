import { AsyncPaginate } from 'react-select-async-paginate';
import { SetStateAction, useState } from 'react';

// @ts-expect-error not defined
export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  let controller: AbortController;

  async function loadOptionsPhoton(searchQuery: string) {
    if (controller) controller.abort();
    controller = new AbortController();

    if (!searchQuery || searchQuery.length < 3) {
      return { options: [], hasMore: false };
    }
    try {
      const response = await fetch(
        `https://photon.komoot.io/api/?q=${searchQuery}&limit=5`,
        {
          signal: controller.signal,
        }
      );

      const data = await response.json();

      const options = data.features
        .map(
          (item: {
            geometry: { coordinates: number[] };
            properties: { name: string; country: string };
          }) => ({
            value: `${item.geometry.coordinates[0]} ${item.geometry.coordinates[1]}`,
            label: `${item.properties.name}, ${item.properties.country}`,
          })
        )
        .filter(
          (item: { value: string; label: string }) =>
            !item.value.includes('undefined') &&
            !item.label.includes('undefined')
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
      // @ts-expect-error not defined
    } catch (err: Error) {
      if (err.name === 'AbortError') return { options: [], hasMore: false };
      return { options: [], hasMore: false };
      // Обработка других сетевых ошибок
    }
  }

  const handleOnChange = (searchData: SetStateAction<string>) => {
    // @ts-expect-error not defined
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }), // Поверх всех окон
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
      reloadOnSearchChange={true}
      closeMenuOnSelect={true}
      blurInputOnSelect={true}
      menuPortalTarget={document.body}
      menuPlacement="auto"
      filterOption={() => true}
      loadingMessage={() => 'Поиск города...'}
      noOptionsMessage={() => 'Ничего не найдено'}
      value={search}
      cacheUniqs={[search]}
      // @ts-expect-error not defined
      onChange={handleOnChange}
      loadOptions={loadOptionsPhoton}
    />
  );
};
