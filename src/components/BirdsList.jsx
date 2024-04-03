import { BirdRow } from "./BirdRow";

export const BirdsList = ({ birds = [] }) => {
  return (
    <>
      <h3>Lista de Especies</h3>

      <div className="col-4 mb-3">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => searchItems(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

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
