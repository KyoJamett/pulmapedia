import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../images/images";

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
        <div className="row">
          <img
            src={images[birdSelected.name.toLowerCase()]}
            alt="bird"
            id="image_birds"
          />
        </div>

        <div className="row">
          <p>{birdSelected.more}</p>
        </div>
      </div>
    </>
  );
};
