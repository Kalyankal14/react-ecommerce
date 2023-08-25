import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../Constants';

const AppContext = createContext({
    products: [],
    loading: true
})

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log(":: API_ENDPOINTS.PRODUCTS ::", res);
        setProducts(res.products);
      })
  }, []);

  return (
    <AppContext.Provider value={{
        products,
        loading,
        setLoading
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