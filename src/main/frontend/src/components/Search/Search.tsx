import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform the search operation here
    console.log('Searching for:', searchTerm);
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      label="Search"
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleSearchSubmit();
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchSubmit}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInput;
