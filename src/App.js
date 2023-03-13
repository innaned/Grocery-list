import './App.css';
import { GroceryList } from './groceryList';
import image from './online.jpg';
import imageTwo from './shopping.jpg';

function App() {
  return (
    <div className='App'>
      <img src={imageTwo} width='400px' alt="online shopping"/>
      <h1>Grocery list</h1>
      <GroceryList/>
      <img className='women' src={image} width='180px' alt="grocery"/>

     
    </div>
  );
}

export default App;
