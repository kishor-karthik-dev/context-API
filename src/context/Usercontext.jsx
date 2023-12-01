import React, { useEffect } from "react";
import axios from "axios";
import { createContext, useState } from "react";

const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartitem, setCartitem] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const handletotal = () => {
    let price = 0;
    cartitem.map((item) => {
     return price += Number(item.price * item.quantity);
    });
    setTotal(price);
  };
  useEffect(() => {
    handletotal();
  });
  const handleChange = (item, quantity) => {
    const updatedCart = cartitem.map((existingItem) => {
      if (existingItem.id === item.id) {
        const updatedqty = existingItem.quantity + quantity;
        return { ...existingItem, quantity: updatedqty > 0 ? updatedqty : 1 };
      } else {
        return existingItem;
      }
    });
    setCartitem(updatedCart);
  };

  const handleAdditem = (product) => {
    setCartitem([...cartitem, product]);
  };

  const handleRemoveitem = (itemToRemove) => {
    setCartitem(cartitem.filter((item) => item.id !== itemToRemove.id));
  };

  useEffect(() => {
    let fetchData = async () => {
      try {
        setLoading(true);
        const productData = await axios.get(
          `https://fakestoreapi.com/products`
        );
        const updateProductdata = productData.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setProduct(updateProductdata);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const contextValue = {
    product,
    handleAdditem,
    handleRemoveitem,
    cartitem,
    total,
    handletotal,
    handleChange,
    loading,
  };
  //  console.log(product)
  return (
    <Usercontext.Provider value={contextValue}>{children}</Usercontext.Provider>
  );
};

export default Usercontext;
