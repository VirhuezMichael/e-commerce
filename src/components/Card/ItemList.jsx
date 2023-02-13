import Item from "./Item";
import "./ItemList.css";

// Este componente genera el listado de productos que recibe de products
const ItemList = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((producto) => (
        // Paso c/u de los productos como un objeto para ser renderizado en las Cards
        //La key debe asignarse al componente principal y no como prop al children
        <Item producto={producto} key={producto.id}/>
      ))}
    </div>
  );
};

export default ItemList;
