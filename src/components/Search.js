import React, { useState } from 'react';

const Search = props => {
  const [search, setSearch] = useState('');

  const searchInputChangeHandler = e => setSearch(e.target.value);

  const resetInput = () => setSearch('');

  const onSearchHandler = e => {
    e.preventDefault();
    if (search === '') return;
    props.onSearch(search);
    resetInput();
  };

  return (
    <form className='search'>
      <input value={search} onChange={searchInputChangeHandler} type='text' />
      <input onClick={onSearchHandler} type='submit' value='SEARCH' />
    </form>
  );
};

export default Search;
