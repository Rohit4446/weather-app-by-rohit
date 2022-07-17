import React, { useState } from "react";

import { geoApiOptions, GEO_API_URL } from "./api";

const Search = ({ getLocation }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState({
    status: false
  });

  const loadOptions = (data) => {
    return fetch(`${GEO_API_URL}/cities?namePrefix=${data}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        response.data[0] !== undefined || null
          ? setSearch({
              latitude: response.data[0].latitude,
              longitude: response.data[0].longitude,
              status: true
            })
          : alert("please correct location");
      });
  };
  // console.log(search);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />

      {data}

      <button
        onClick={() => {
          data !== null ? loadOptions(data) : alert("please give a locatioons");
        }}
      >
        get data
      </button>
      {search.status && getLocation(search)}
    </>
  );
};

export default Search;
