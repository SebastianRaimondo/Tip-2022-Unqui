import './App.css';
import React, {Fragment} from 'react'
import Navbar from './component/layout/Navbar'
import Landing from './component/layout/Landing'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './component/auth/Login'
import {Register} from './component/auth/Register'
import {Provider} from 'react-redux';
import {store} from './store'
import Alert from './component/layout/Alert'

const App = () => (

  <Provider store= {store}>
  <Router>
    <Fragment>
    <Navbar />
     
    <Alert/>
    <section  className="container">
      
    
       </section>
      
     
      <Routes>
 
        <Route exact path='/' element={<Landing />} />

        
        <Route exact path='/register' element={    <Register /> } />
        <Route exact path='/login' element={<Login />} />
      

      </Routes>
    </Fragment>
  </Router>
  </Provider>
);

export default App;
