import { useState } from 'react';
import './App.css';

import MenuContainder from './components/MenuContainer/MenuContainer';
import Carrinho from './components/carrinho/carrinho';


function App() {

  const [inventory, setinventory] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ])
  const [filteredProducts, setFilteredProducts] = useState('');
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)


  const showProducts = (filteredProducts) => {
        setProducts(products.filter(item => 
        item.name.toLocaleLowerCase() === filteredProducts.toLocaleLowerCase()))  
    
    }

  const todosProdutos = () => {
    setProducts(inventory)
    
  }; 
    
  const handleClick = (productId) => {
    if (currentSale.some(item => item.id === productId)){
    }else{
      const productAdd = products.find(item =>item.id === productId)
      setCurrentSale([...currentSale, productAdd])
      setCartTotal(cartTotal + productAdd.price)
    }
  }

  return (
    <div className="App-header">  
        <div className = "divSearch">
          <input placeholder = "Oque você procura?" onChange = {(event) => setFilteredProducts(event.target.value)} />
          <div className = "divButton">
            <button onClick = {() => showProducts(filteredProducts)}>Pesquisar</button>
            <button onClick = {todosProdutos}>Voltar</button>
          </div>
        <MenuContainder products ={products} function = {handleClick}/>
        </div>
        <div className = "divCarrinho">
          <h1 className = "h1Carrinho">Carrinho De Compras</h1>
          <Carrinho currentSale = {currentSale} />
          {cartTotal > 0 ? (<h3 className = "h1Carrinho"> Valor total:  {cartTotal.toFixed(2)} </h3>) : (<span></span>) }
        </div>
    </div>
  );
}

export default App;
