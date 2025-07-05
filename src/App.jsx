import React from 'react';
import Homepage from './Homepage'
import ProductPage from './ProductPage'
import RegisterPage from './RegisterPage'
import Footer from './Footer';
import { Route, Switch } from 'wouter'
import Navbar from './Navbar';
import FlashMessage from './FlashMessage'


export default function App(){
  return (
    <>
    <Navbar/>
    <FlashMessage/>

    <Switch>
        <Route path ='/' component={Homepage}/>
        <Route path ='/ProductPage' component={ProductPage}/>
        <Route path ='/RegisterPage' component={RegisterPage}/>
    </Switch>
   <Footer/>
    </>
  )
}