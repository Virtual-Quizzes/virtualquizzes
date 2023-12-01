import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import React from 'react';
import {Routing} from './routes/routingv3';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
