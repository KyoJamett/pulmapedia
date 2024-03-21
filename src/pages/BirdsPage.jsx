import { BirdsList } from "../components/BirdsList";
import { useBirds } from "../hooks/useBirds";

export function BirdsPage() {
  const { birds } = useBirds();
  return (
    <>
      <div className="container my-4">
        <h3>{"Pulmapedia"}</h3>
        <div className="row">
          <BirdsList birds={birds} />
        </div>
      </div>
    </>
  );
}
