import React, { useState } from "react";
import "./search.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((responce) => responce.json())
      .then((responce) => {
        return {
          options: responce.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} , ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      border: "2px solid #ccc",
      color: state.isFocused ? "white" : "white",
      boxShadow: state.isFocused ? "0 0 0 2px #3699FF" : null,
      backgroundColor: state.isFocused ? "#f0f8ff81" : "#f0f4f755",
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1a2d3d9b" : null,
      color: state.isFocused ? "white" : "#1875d2",
    }),
  };

  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={customStyles}
      />
    </div>
  );
}
