import { useState, useEffect } from 'react';
import { Navbar, Products, Cart, Checkout } from './components'
import { commerce } from './lib/commerce';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item);
  }

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);

    setCart(item);
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();

    setCart(item);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {

    fetchProducts();
    fetchCart();
  
  }, [])

    
  return (
    <BrowserRouter>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route 
            path='/cart'
            element={
              <Cart 
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart} />
          }/>
          <Route 
            path='/checkout' 
            element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
