import { Figure } from "react-bootstrap";
import "./CardDetail.css";

const CardDetail = ({ result }) => {
  console.log(result);
  return (
    <Figure className="figure-container">
      <Figure.Image className="img"
        width={400}
        height={400}
        alt="171x180"
        src={result.imagen}
      />
      <Figure.Caption className="p-4">
        Detalle de Producto Seleccionado
        <p>{result.name}</p>
        <p>{result.description}</p>
        <p>{result.stock}</p>
      </Figure.Caption>
    </Figure>
  );
};

export default CardDetail;
