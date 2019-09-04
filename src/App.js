import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Notification,
  showNotification
} from './features/Notification/Notification';
import { Button } from '@material-ui/core';

function App() {
  const openSnackbar = () => {
    showNotification({ message: 'pizza', variant: 'success' });
    // showNotification({ message: 'water', variant: 'info' });
    // showNotification({ message: 'banana', variant: 'warning' });
    // showNotification({ message: 'tomato', variant: 'error' });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button
          variant='contained'
          color='secondary'
          onClick={() => openSnackbar()}
        >
          snack
        </Button>
        <Notification />
      </header>
    </div>
  );
}

export default App;
