import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Concert from './pages/Concert';
import Header from './pages/Header';

const App = () => {   
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="concert" element={<Concert />}>
          <Route path=":usertitle" element={<Concert />} />
        </Route>
      </Route>
    </Routes>
  );  
  
}

export default App;
