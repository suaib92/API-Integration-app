import React from 'react';
import { TextField, Typography } from '@mui/material';

const Header = ({ searchTerm, handleSearch }) => {
  return (
    <div className="bg-blue-500 p-6 text-center">
      <Typography variant="h4" className="text-white mb-4">API Integration with Material-UI and Tailwind CSS</Typography>
      <div className="flex justify-center">
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-white rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
