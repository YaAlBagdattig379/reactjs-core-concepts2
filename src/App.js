import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop',price:'10001',brand: 'japani'},
    {name: 'mobile',price:'9001',brand: 'asian'},
    {name: 'watch',price:'100',brand: 'sona'},
    {name: 'torch',price:'2001',brand: 'korean'}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name = {product.name} price='2000'></Product>)
      }
{/*     
      <Product name ="laptoppue" price="11000" ></Product>
      <Product name ="mobile" price="2100" ></Product>
      <Product name ="watch" price="1200" ></Product> */}
    </div>
  );
}
function Product(props) {
  return (
    <div className="product">
      <h2>Name : {props.name} </h2>
      <p>Price : {props.price} </p>
    </div>
  );
}

export default App;