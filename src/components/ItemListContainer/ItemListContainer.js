//import "./ItemListContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductos, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProductos;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
