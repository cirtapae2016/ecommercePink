import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

function ItemDetail({ id, title, image, category, description, price, stock }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { id, title, image, category, description, price, stock };

    addToCart(item, quantity);
  };

  return (
    <article className="card CardItem" style={{ maxWidth: 300 }}>
      <header className="card-header">
        <p className="card-header-title is-centered ItemHeader">{title}</p>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} className="ItemImg" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="Info">
            <b> Categoria: </b>
            {category}
          </p>
          <p className="Info">
            <b>Descripcion:</b> {description}
          </p>
          <p className="Info">
            <b>Precio:</b> ${price}
          </p>
        </div>
        <footer className="ItemFooter">
          {quantityAdded > 0 ? (
            <NavLink to={`/cart`}>
              <button>Terminar mi compra!</button>
            </NavLink>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          )}
        </footer>
      </div>
    </article>
  );
}

export default ItemDetail;
