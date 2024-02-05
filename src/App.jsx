import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { Home } from './Home/Home';
import {About_us} from './About_US/About_us';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/About_us' Component={About_us}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
