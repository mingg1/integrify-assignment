import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <input type="text" name="city" id="city" placeholder="Enter city name" />
      <button>Get weather info</button>
    </form>
  );
};

export default SearchBar;
