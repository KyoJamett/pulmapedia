export const BirdRow = ({ id, name, description, area }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{area}</td>
      <td>
        <button type="button" className="btn btn-secondary btn-info">
          Ver más
        </button>
      </td>
    </tr>
  );
};
