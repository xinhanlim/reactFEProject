import React from 'react';
import Homepage from './Homepage'
import ProductPage from './ProductPage'
import RegisterPage from './RegisterPage'
import Footer from './Footer';
import { Route, Switch } from 'wouter'
import Navbar from './Navbar';

export default function App(){
  return (
    <>
    <Navbar/>
    <Switch>
        <Route path ='/' component={Homepage}/>
        <Route path ='/ProductPage' component={ProductPage}/>
        <Route path ='/RegisterPage' component={RegisterPage}/>
    </Switch>
   <Footer/>
    </>
  )
}