import React from 'react';
import Homepage from './Homepage'
import ProductPage from './ProductPage'
import RegisterPage from './RegisterPage'
import Footer from './Footer';
import { Route, Switch } from 'wouter'
import Navbar from './Navbar';
import FlashMessage from './FlashMessage'
import ShoppingCart from './ShoppingCart';
import UserLogin from './Login';
import Profile from './Profile';


export default function App(){
  return (
    <>
    <Navbar/>
    <FlashMessage/>

    <Switch>
        <Route path ='/' component={Homepage}/>
        <Route path ='/ProductPage' component={ProductPage}/>
        <Route path ='/ShoppingCart' component={ShoppingCart}/>
        <Route path ='/RegisterPage' component={RegisterPage}/>
        <Route path ='/login' component={UserLogin} />
        <Route path ='/profile' component={Profile}/>

    </Switch>
   <Footer/>
    </>
  )
}