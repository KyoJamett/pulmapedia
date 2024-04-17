import { useState } from "react";
import { BirdRow } from "./BirdRow";

export const BirdsList = ({ birds = [] }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  console.log(searchInput);
  /*const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = birds.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(searchInput);
      console.log(filteredResults);
    } else {
      setFilteredResults(birds);
    }
  };*/

  return (
    <>
      <div className="table-responsive card">
        <h2>Lista de Especies</h2>

        <div className="col-4 mb-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {/*<button className="btn btn-outline-success" type="submit">
            Search
  </button>*/}
          </form>
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
              .map(({ id, name, description, area }) => (
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
      </div>
    </>
  );
};
