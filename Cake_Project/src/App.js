import React from 'react';
import './App.css';
import MainComponent from './Component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import selfStore from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={selfStore}>
        <BrowserRouter>
          < MainComponent />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;

// https://bohubrihi.com/
