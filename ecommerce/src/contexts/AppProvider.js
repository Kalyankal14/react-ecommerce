import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../Constants';

export const AppContext = createContext({
    products: [],
    loading: true
})

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProduct] = useState({});
  /*
    {
      5: PRODUCT_5
      6: PRODUCT_6
    }
  */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log(":: API_ENDPOINTS.PRODUCTS ::", res);
        setProducts(res.products);
      })
  }, []);

  const addProductToCart = (product) => {
    let addedProduct = cartItems.find(cartProduct => cartProduct.id == product.id);
    if(!addedProduct) {
      addedProduct = product;
      addedProduct.quantity = 1;
    } else {
      addedProduct.quantity++; // product.quantity = product.quantity + 1;
    };
    const filterProducts = cartItems.filter(cartProduct => cartProduct.id != product.id)
    setCartItems([...filterProducts, addedProduct]);


    let cartProduct = cartProducts[product.id];
    if(!cartProduct) {
      cartProduct = product;
      cartProduct.quantity = 1;
    } else {
      cartProduct.quantity++;
    }
    setCartProduct({...cartProducts, [product.id]: cartProduct});

  }

  return (
    <AppContext.Provider value={{
        products,
        loading,
        setLoading,
        cartItems,    // [{id: 1}, {id: 2}]
        cartProducts, // {1: {id: 1}, 2: {id: 2}}
        addProductToCart
    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
export default AppProvider

/*
const {products, loading, setLoading} = useAppContext();
*/