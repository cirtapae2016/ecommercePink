//import "./ItemListContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { getProductos, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    // const asyncFunc = categoryId ? getProductsByCategory : getProductos;
    // asyncFunc(categoryId)
    //   .then((response) => {
    //     setProducts(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // const collectionRef = collection(db, "items");
    const collectionRef = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");
    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        // console.log(productsAdapted);
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
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
