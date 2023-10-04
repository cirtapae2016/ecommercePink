// import "./ItemDetail.css"

import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({ id, name, image, category, description, price, stock }) {
  return (
    <article className="card CardItem" style={{ maxWidth: 300 }}>
      <header className="card-header">
        <p className="card-header-title is-centered ItemHeader">{name}</p>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={name} className="ItemImg" />
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
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => {
              console.log("Cantidad agregada de items ", quantity);
            }}
          />
        </footer>
      </div>
    </article>
  );
}

export default ItemDetail;
