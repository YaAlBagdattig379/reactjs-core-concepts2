import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [roll,setRoll] = useState(33);
  const increaseCount = () => setRoll(roll +1);
  const decreaseCount = () =>{
    if(roll > 0)
    setRoll(roll - 1);
  } 
  // const increaseCount = () =>{
  //   const currentRoll = roll +1;
  //   setRoll(currentRoll);
  return (
    <div>
      <h1>Roll :{roll} </h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
    
    )
}


{/*  (normal example video: 6...step..1 uporer theke)
const products = [
    {name: 'laptop',price:'10001',brand: 'japani'},
    {name: 'mobile',price:'9001',brand: 'asian'},
    {name: 'watch',price:'100',brand: 'sona'},
    {name: 'torch',price:'2001',brand: 'korean'}
  ]
/*}
{/* (normal example video: 6...step..2 uporer theke)
      {
        products.map(product => <Product name = {product.name} price='2000'></Product>)
      }
{/*     
      <Product name ="laptoppue" price="11000" ></Product>
      <Product name ="mobile" price="2100" ></Product>
      <Product name ="watch" price="1200" ></Product> 
       */}

{/*    (normal example video: 6...step..3 uporer theke)
function Product(props) {
  return (
    <div className="product">
      <h2>Name : {props.name} </h2>
      <p>Price : {props.price} </p>
    </div>
  );
}

* */}


export default App;