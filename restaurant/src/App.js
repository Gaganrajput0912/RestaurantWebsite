import Card from './components/UI/Card';
import './App.css';
import CardProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import React, {useState} from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
   <div>
    <Card>
      <CardProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} ></Header>
      <main>
<Meals></Meals>
      </main>
      </CardProvider>
    </Card>
   </div>
  );
}

export default App;
