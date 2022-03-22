import './App.css';
import React, {Fragment} from 'react'
import Navbar from './component/layout/Navbar'
import Landing from './component/layout/Landing'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './component/auth/Login'
import Register from './component/auth/Register'

const App = () => (
  <Router>
    <Fragment>

<section>
      <Navbar />

      </section>
      <Routes>
 
        <Route exact path='/' element={<Landing />} />

        
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      

      </Routes>
    </Fragment>
  </Router>
);

export default App;
