import { BirdRow } from "./BirdRow";

export const BirdsList = ({ birds = [] }) => {
  return (
    <>
      <p>Lista de Especies</p>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Zona</th>
          </tr>
        </thead>
        <tbody>
          {birds.map(({ id, name, description, area }) => (
            <BirdRow
              key={id}
              id={id}
              name={name}
              description={description}
              area={area}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
