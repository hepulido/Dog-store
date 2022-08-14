import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './screens/Home.js';
import Dog from './screens/Dog.js';



function App() {
  
  
    return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dog' element={<Dog />}  />
        </Routes>
    </>
  );
}

export default App;
