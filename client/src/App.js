import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import { Register } from "./component/auth/Register";
import { Provider } from "react-redux";
import { store } from "./store";
import { loadUser } from "./actions/auth";
import Dashboard from "./component/dashboard/Dashboard";
import PrivateRoute from "./component/routing/PrivateRoute";
import CreateProfile from "./component/profile-forms/CreateProfile";
import EditProfile from "./component/profile-forms/EditProfile";
import AddExperience from "./component/profile-forms/AddExperience";
import AddEducation from "./component/profile-forms/AddEducation";
import Profiles from "./component/profiles/Profiles";
import Profile from "./component/profiles/Profile";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />


          <Route exact path='/profiles' element={<Profiles />} />
          <Route exact path='/profile/:id' element ={<Profile />} />

          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path='/create-profile'
            element={
              <PrivateRoute>
                <CreateProfile />
              </PrivateRoute>
            }
          />

          <Route
            path='/edit-profile'
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />

          <Route
            path='/add-experience'
            element={
              <PrivateRoute>
                <AddExperience />
              </PrivateRoute>
            }
          />

          <Route
            path='/add-education'
            element={
              <PrivateRoute>
                <AddEducation />
              </PrivateRoute>
            }
          />

          <Route exact path='/' element={<Landing />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
