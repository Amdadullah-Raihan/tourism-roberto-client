import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/single-room' element={<SingleRoom/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/single-blog' element={<Blogs/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/contact' element={<Contact/>} />

          {/* private routes starts */}

          <Route path=' ' element={<PrivateRoute></PrivateRoute>} />
          
          {/* private routes ends */}


          {/* Not found page  */}
          <Route path='*' element={<NotFound/>} />

       </Routes>
    </div>
  );
}

export default App;
