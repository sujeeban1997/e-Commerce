import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Products from './Component/Products';
import Product from './Component/Product';
import { Switch, Routes,  Route } from 'react-router-dom';
import Cart from './Component/Cart';

function App() {
  return (
    <>
      <Navbar />
          <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/products" Component={Products} />
                <Route exact path="/products/:id" Component={Product} />
                <Route exact path="/cart" Component={Cart} />
          </Routes>
    </>
  );
}

export default App;
