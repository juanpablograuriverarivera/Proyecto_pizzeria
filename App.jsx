// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Vistas/Home';
import PizzaDetail from './Vistas/PizzaDetail';
import Cart from './componentes/Cart';
import PizzaProvider from './context/PizzaProvider';
import Navbar from './Navbar'; // Importación del Navbar
import './App.css';

function App() {
  return (
    <Router>
      <PizzaProvider>
        <Navbar /> {/* Colocar el Navbar antes de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </PizzaProvider>
    </Router>
  );
}

export default App;




