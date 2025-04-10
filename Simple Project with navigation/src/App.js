import React from 'react';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Counter from './Component/Counter';
import FlaverTest from './Component/FlaverTest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Component/Calculator';
import DataColection from './Component/DataColection';
import Age from './Component/Age';
import Player from './Component/Player';
import NewYear from './Component/NewYearTime';
import Test from './Component/Test';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/DataColection' element={<DataColection />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/flavertest' element={<FlaverTest />} />
        <Route path='/age' element={<Age />} />
        <Route path='/newyear' element={<NewYear />} />
        <Route path='/player' element={<Player />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

// https://bohubrihi.com/
