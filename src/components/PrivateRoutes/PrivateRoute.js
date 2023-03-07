import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Login from '../Login/Login';

const PrivateRoute = ({children}) => {
  const {user} = useFirebase();
  let location = useLocation();



  if(user.email){

    return children;
  }
  return <Login/>
 


}
export default PrivateRoute;