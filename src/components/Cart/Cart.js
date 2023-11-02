import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { cartList, cantItems, totalPrice, deleteItem, removeList } = useContext(CartContext);

  if (cantItems == 0) {
    return (
      <div className="container">
        <h1 className="title">Carrito vacío</h1>
        <NavLink to={"/"}>
          <button>Ir al catálogo</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Tu compra</h1>
      {cartList.map((item) => (
        <div className="box" key={item.id}>
          <div className="columns">
            <div className="column is-2">
              <img src={item.image} alt={item.title} className="image is-64x64" />
            </div>
            <div className="column">{item.title}</div>
            <div className="column">Precio ${item.price}</div>
            <div className="column">Cantidad: {item.quantity}</div>
            <div className="column is-1">
              <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
          </div>
        </div>
      ))}
      <div className="columns is-mobile">
        <div className="column is-4 is-offset-8">
          <div className="box" style={{ display: "flex", justifyContent: "space-between" }}>
            Total: ${totalPrice}{" "}
            <NavLink to={"/checkout"}>
              <button>Finalizar compra</button>
            </NavLink>
          </div>
          <button onClick={removeList}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};
