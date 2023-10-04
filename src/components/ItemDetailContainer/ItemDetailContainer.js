import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="container">
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
