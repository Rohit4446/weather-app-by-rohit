import React, { useState } from "react";
import "./search.css";
import { geoApiOptions, GEO_API_URL } from "../api";

const Search = ({ getLocation }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState({
    status: false
  });

  const loadOptions = async (data) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?namePrefix=${data}`,
      geoApiOptions
    );
    const respo = await response.json();
    // console.log(response);
    respo.data[0] !== undefined || null
      ? setSearch({
          latitude: respo.data[0].latitude,
          longitude: respo.data[0].longitude,
          status: true
        })
      : alert("please correct location");
  };
  // console.log(search);
  return (
    <div id="search">
      <input
        placeholder="Enter a location"
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
        id="search-input"
      />

      <button
        onClick={() => {
          data !== null
            ? loadOptions(data) && setData(null)
            : alert("please give a locatioons");
        }}
        id="button-input"
      >
        Check
      </button>
      {search.status && getLocation(search)}
    </div>
  );
};

export default Search;
