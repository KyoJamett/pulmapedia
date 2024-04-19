import { BirdForm } from "../components/BirdForm";
import { BirdsList } from "../components/BirdsList";
import { useBirds } from "../hooks/useBirds";

export function BirdsPage({ birds }) {
  const { handlerAddBird } = useBirds();
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
