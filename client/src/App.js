import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import { Register } from "./component/auth/Register";
import { Provider } from "react-redux";
import { store } from "./store";
import { userLoaded } from "./actions/auth";
import Dashboard from "./component/dashboard/Dashboard";
import PrivateRoute from "./component/routing/PrivateRoute";
import CreateProfile from "./component/profile-forms/CreateProfile";
import EditProfile from "./component/profile-forms/EditProfile";
import AddExperience from "./component/profile-forms/AddExperience";
import AddEducation from "./component/profile-forms/AddEducation";
import Profiles from "./component/profiles/Profiles";
import Profile from "./component/profiles/Profile";
import Posts from "./component/posts/Posts";
import Post from "./component/post/Post";
import NotFound from "./component/layout/NotFound"
import AddLanguage from "./component/profile-forms/AddLanguage";

const App = () => {
  
  useEffect(() => {
    store.dispatch(userLoaded());
  },[]);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/profiles' element={<Profiles />} />
          <Route exact path='/profile/:id' element={<Profile />} />
          <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/create-profile' element={<CreateProfile/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/add-experience' element={<AddExperience/>}/>
          <Route path='/add-education' element={<AddEducation/>}/>
          <Route path='/add-language' element={<AddLanguage/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path="/posts/:id/" element={<Post/>}/> 
          </Route>

          <Route path='*' element={<NotFound />} />
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
