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
        <h3>{birdSelected.name}</h3>
        <br></br>
        <div className="col-md-8">
          <img
            src={images[birdSelected.name.toLowerCase()]}
            alt="bird"
            id="image_birds"
          />
        </div>
        <br></br>
        <div className="col-md-6">
          <p className="text-justify">{birdSelected.more}</p>
        </div>
      </div>
    </>
  );
};
