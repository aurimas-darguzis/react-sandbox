import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Notification, showNotification } from './features/Notification/';
import { Button, makeStyles } from '@material-ui/core';
import Spinner from './features/Spinner';

const useStyles = makeStyles(() => ({
  divider: {
    marginTop: '50px3'
  }
}));

function App() {
  const classes = useStyles();

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
        <div className={classes.divider}></div>
        <Spinner />
      </header>
    </div>
  );
}

export default App;
