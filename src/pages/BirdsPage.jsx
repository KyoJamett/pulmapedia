import { useReducer } from "react";
import { BirdForm } from "../components/BirdForm";
import { BirdsList } from "../components/BirdsList";
import { useBirds } from "../hooks/useBirds";
import { birdsReducer } from "../reducers/birdsReducer";

export function BirdsPage() {
  const {
    birds,
    initialBirds,
    initialBirdSelected,
    aboutUs,
    initialBirdForm,
    handlerAddBird,
  } = useBirds();

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <BirdsList birds={birds} />
        </div>
        <div className="row">
          <BirdForm handlerAddBird={handlerAddBird} />
        </div>
      </div>
    </>
  );
}
