import './App.css';
import React, {Fragment,useEffect} from 'react'
import Navbar from './component/layout/Navbar'
import Landing from './component/layout/Landing'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './component/auth/Login'
import {Register} from './component/auth/Register'
import {Provider} from 'react-redux';
import {store} from './store'
import Alert from './component/layout/Alert'
import { loadUser } from './actions/auth';
import Dashboard from './component/dashboard/Dashboard';
import PrivateRoute from './component/routing/PrivateRoute';

//if (localStorage.token) {
//  setAuthToken(localStorage.token);
//}

const App = () => { 

  useEffect(() => {

    store.dispatch(loadUser())
  },[])
  
  return (
   

  <Provider store= {store}>
      
  <Router>
  <Navbar/>
 
 
  
     
      <Routes>
 
       
        
        <Route exact path='/register' element={<Register/> } />
        
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />

        <Route exact path='/' element={<Landing/> } />
      

      </Routes>



     
  </Router>
  
  </Provider>

)};

export default App;
