import React, { useState, useEffect } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';

function App() {

  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [cartArray, setCartArray] = useState([])

  const fetchData = () => {
    fetch('https://floating-temple-56492.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const updatePrice = (productPrice, cartProduct) => {
    setPrice(price + productPrice);
    let newCart = [...cartArray];
    let itemInCart = newCart.find(item => cartProduct.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        ...cartProduct, quantity: 1
      }
      newCart.push(itemInCart)
    }
    setCartArray(newCart)
  }

  const clearItems = () => {
    setCartArray([])
    setPrice(0)
  }

  return (
    <div className="App">
      <Navbar price={price} />
      <Switch>
        <Route exact path='/' render={() => <Home data={data} />} />
        <Route path='/cart' render={() => <Cart price={price} cartArray={cartArray} clearItems={clearItems} />} />
        <Route path='/product/:id' render={(routerProps) => <ProductDescription routerProps={routerProps} data={data} updatePrice={updatePrice} />} />
      </Switch>
    </div>
  );
}

export default App;
