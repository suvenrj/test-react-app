import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import {store} from './state/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Grid container>
      <Grid item xs={6}>
      <Form/>
      </Grid>
      <Grid item xs={6}>
        <Chat/>
      </Grid>
      </Grid>
    </div>
    </Provider>
  );
}

export default App;
