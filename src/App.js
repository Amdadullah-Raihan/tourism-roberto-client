import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import SingleRoom from './components/Rooms/SingleRoom';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import styles from "./index.css"
import HeroSection from './components/Home/HeroSection';
import Dashboard from './components/Dashboard/Dashboard';
import { Footer } from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import ContactComponent from './components/Contact/ContactComponent';
import SingleBlog from './components/Blogs/SingleBlog';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/blogs/:id' element={<SingleBlog/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/rooms/:id' element={<SingleRoom/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>

          {/* dashboard */}
          <Route path='/dashboard/*' element={<Dashboard/>}/>
          {/* private routes starts */}

          {/* <Route path=' ' element={<PrivateRoute></PrivateRoute>} /> */}
          
          {/* private routes ends */}


          {/* Not found page  */}
          <Route path='*' element={<NotFound/>} />

       </Routes>
       <ContactComponent/>
       <Partners/>
       <Footer/>
    </div>
  );
}

export default App;
