import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PizzaContext } from './context/PizzaProvider';

const Navbar = () => {
  const { cart } = useContext(PizzaContext);

  // Calcular el total del carrito
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="public/Pizza-vector-logo-by-hartgraphic (1).jpg" alt="Pizza Logo" width="30" height="30" className="d-inline-block align-top" />
         pizza ¡Mama mia!
        </Link>
        <div className="mx-auto">
          <span>Total: ${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="pizza-background">
        <h1 className="text-center mt-5">¡Pizzeria Mamamia!</h1>
        <h4 className="text-center">¡Tenemos las mejores pizzas que podrás encontrar!</h4>
      </div>
    </nav>
  );
};

export default Navbar;



