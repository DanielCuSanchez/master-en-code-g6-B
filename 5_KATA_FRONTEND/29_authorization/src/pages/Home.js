import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../services/items.service";

export const Home = () => {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    getItems()
      .then(products=>setProducts(products))
      .catch(error=>{
        console.error(error);
        setProducts([])
      });
  }, [])
  
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="row">
      {
        products ?
        products.length ?
          products.map((prod, key) => (
            <Link key={key} to={`/product/${prod._id}`} style={{ textDecoration: 'none', color: 'inherit', maxWidth: '18rem', margin: 'auto' }}>
              <div className="card" >
                <img src={prod.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{prod.product_name}</h5>
                    <p className="card-text">{prod.description}</p>
                  </div>
              </div>
            </Link>   
          ))
        : <p>There are no products</p>
        : (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        )
      }
      </div>
    </div>
  );
};
