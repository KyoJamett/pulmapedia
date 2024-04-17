import { NavLink } from "react-router-dom";

export const BirdRow = ({ id, name, description, area }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{area}</td>
      <td>
        <NavLink
          className={"btn btn-secondary btn-info"}
          to={"/pulmapedia/" + id}
        >
          Ver más
        </NavLink>
      </td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm">
          Editar
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger btn-sm">
          Eliminar
        </button>
      </td>
    </tr>
  );
};
