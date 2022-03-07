import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useState } from 'react';

import '../style/home.css';
import productList from '../products.json';
import Card from 'components/card';
import Cart from 'components/cart';

const HomePage = () => {
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]);
  
  return (
    <>
      <div className="home">
      <h1>Products</h1>
      <div className="products">
         
        {
          productList.map(el => {
            return (
              <Card
                image={el.imageUrl}
                name={el.name}
                price={el.price}
                afterClick={() => setCartList([...cartList, el])}
              />
            )
          })
        }

      </div>
      <div className="carts">
        <h1>Carts</h1>
        {
          cartList.map(el => {
            return (
              <Cart />
            )
          })
        }
      </div>
      </div>
      <Button
        onClick={() => {
          navigate("/about");
        }}
      >
        About Page
      </Button>
    </>
    
  );
};

export default HomePage;
