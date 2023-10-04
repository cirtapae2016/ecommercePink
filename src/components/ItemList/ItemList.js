// import "./ItemList.css"

import Item from "../Item/Item";

function ItemList({ products }) {
  console.log(products);
  return (
    <div className="is-flex is-flex-wrap-wrap" style={{ gap: 20 }}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}
export default ItemList;
