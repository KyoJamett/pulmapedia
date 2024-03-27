import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Bird = ({ birds = [], initialBirdSelected }) => {
  const [birdSelected, setBirdSelected] = useState(initialBirdSelected);

  const { id } = useParams();

  useEffect(() => {
    const bird = birds.find((u) => u.id == id) || initialBirdSelected;
    setBirdSelected(bird);
  }, [id]);

  return (
    <>
      <div className="container my-4">
        <h4>{birdSelected.name}</h4>
      </div>
    </>
  );
};
