import { useState } from "react";
import { useBirds } from "../hooks/useBirds";

export const BirdForm = ({ handlerAddBird }) => {
  const { initialBirdForm } = useBirds();
  const [birdForm, setBirdForm] = useState(initialBirdForm);
  const { id, name, description, area, more } = birdForm;

  const onInputChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    setBirdForm({
      ...birdForm,
      [name]: value,
    });
  };

  //----------------FUNCION QUE SE DISPARA AL APRETAR CREAR O EDITAR EN EL FORMULARIO-------------
  const onSubmit = (event) => {
    event.preventDefault();
    //-----------condicional para checkear que los campos del formulario no estén vacios--------
    if (!name || !description || !area || !more) {
      alert("Debe completar los campos del formulario!");
      return;
    }
    //------------funcion handler para agregar el objeto a la lista de especies------------------
    handlerAddBird(birdForm);
    //console.log(birdForm);
    //------------se limpian los campos al terminar la acción------------------------------------
    setBirdForm(initialBirdForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Nombre"
        name="name"
        value={name}
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Descripción"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Zona"
        name="area"
        value={area}
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Detalle"
        name="more"
        value={more}
        onChange={onInputChange}
      />

      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Editar" : "Crear"}
      </button>

      <button
        className="btn btn-primary mx-2"
        type="button"
        /*onClick={onCloseForm}*/
      >
        Cerrar
      </button>
    </form>
  );
};
