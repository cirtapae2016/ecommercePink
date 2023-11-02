import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    // getProductById(itemId)
    //   .then((response) => {
    //     setProduct(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const docRef = doc(db, "items", itemId);
    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        // console.log(productAdapted);
        setProduct(productAdapted);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  return (
    <div className="container">
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
