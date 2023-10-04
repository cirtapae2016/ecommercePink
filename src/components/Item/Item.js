import { Link } from "react-router-dom";

function Item({ id, title, image, price, stock }) {
  return (
    <article className="card CardItem">
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
          <p className="Info has-text-weight-bold">Precio: ${price}</p>
          <p className="Info has-text-weight-bold">Stock: {stock}</p>
        </div>
      </div>
      <footer className="card-footer">
        <Link to={`/item/${id}`} className="card-footer-item Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
}

export default Item;
