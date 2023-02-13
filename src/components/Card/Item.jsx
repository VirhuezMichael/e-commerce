import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

// Este componente renderiza cada uno de los productos en una Card
const CardItem = ({ producto }) => {
  console.log(producto);
  return (
    <div className="m-4">
      <Card bg="dark" border="light" text="light" style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>Descripción: {producto.description}</Card.Text>
          <Card.Text>Stock: {producto.stock}</Card.Text>
          <Link to={`/detail/${producto.id}`}>
            <Button className="w-100" variant="success">
              Detalle del Producto
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
