import { useBirds } from "../hooks/useBirds";

export const BirdForm = ({ id, name, description, area, more }) => {
  const { initialBirdForm } = useBirds();
  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Nombre"
        name="name"
        value={name}
        /*onChange={onInputChange}*/
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Descripción"
        name="description"
        value={description}
        /*onChange={onInputChange}*/
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Zona"
        name="area"
        value={area}
        /*onChange={onInputChange}*/
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Detalle"
        name="more"
        value={more}
        /*onChange={onInputChange}*/
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
