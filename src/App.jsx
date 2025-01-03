import Item from './Components/Item'
import Cart from './Components/Cart'
import { useContext } from 'react'
import { CartContext } from './context/cart'
import './App.css'

function App() {
  

  return (
    <>
      <Item name="Iphone 11 Pro" price="50000" key ="0"/>
      <Item name="Samsung Z Fold" price="150000" key ="1"/>
      <Item name="Motorola Edge Fusion" price="50000" key ="2"/>
      
      
      <Cart/>
    </>
  )
}

export default App
