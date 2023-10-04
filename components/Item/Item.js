//import "./Item.css";
import {Link} from "react-router-dom";



function Item ({id, title, image, price, stock }){

    console.log(stock)
return (
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
)
    /*return (
        <article className="CardItem">
            <header className="CardItemHeader">
                <h2 className="ItemHeader">
                   prueba  {title}
                </h2>
            </header>
            <picture className="Imagen">
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock } 
                </p>
            </section>
            <footer className="CardItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )*/

}

export default Item;