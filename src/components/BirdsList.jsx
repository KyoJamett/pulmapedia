import { useState } from "react";
import { BirdRow } from "./BirdRow";

export const BirdsList = ({
  birds = [],
  handlerRemoveBird,
  handlerBirdSelectedForm,
  visibleForm,
  handlerOpenForm,
}) => {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  return (
    <>
      <div className="table-responsive card">
        <br></br>
        <h2>Lista de Especies</h2>
        <br></br>
        <div className="col-4 mb-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          {visibleForm || (
            <div className="col">
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                Agregar especie
              </button>
            </div>
          )}
        </div>
        <table className="table table-hover table-striped rounded-3 border">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Zona</th>
              <th>Más info</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {birds
              .filter((bird) => {
                return searchInput.toLowerCase() === ""
                  ? bird
                  : bird.name.toLowerCase().includes(searchInput);
              })
              .map(({ id, name, description, area, more }) => (
                <BirdRow
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  area={area}
                  more={more}
                  handlerRemoveBird={handlerRemoveBird}
                  handlerBirdSelectedForm={handlerBirdSelectedForm}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
