import styled from "styled-components";
import { useCartContext } from "../../context/CartContext";

const DataForm = styled.div`
display: flex;
justify-content: center;
`

const Form = () => {
    const { dataForm, setDataForm } = useCartContext();

    const handleOnChange = (event) => {
        setDataForm({
          ...dataForm,
          [event.target.name]: event.target.value,
          [event.target.phone]: event.target.value,
          [event.target.mail]: event.target.value,
          [event.target.validateMail]: event.target.value,
        });
      };

    return (
        <DataForm>
        <form >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ingresar nombre"
              onChange={handleOnChange}
              value={dataForm.name}
              required
            />
           <input
              type="text"
              name="phone"
              placeholder="Ingresar tel"
              onChange={handleOnChange}
              value={dataForm.phone}
              required
            />
          </div>
          <div>
          <input
              type="text"
              name="mail"
              placeholder="Ingresar mail"
              onChange={handleOnChange}
              value={dataForm.mail}
              required
            />
            <input
              type="text"
              name="validateMail"
              placeholder="Repetir mail"
              onChange={handleOnChange}
              value={dataForm.validateMail}
              required
            />
          </div>
        </form>
      </DataForm>
    )
}

export default Form;