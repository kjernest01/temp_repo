import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

// function Search (){
//   return(
//     <>
//     <h1>SEARCH RESULTS</h1>
//     </>
//   );
// }

export default Search;
