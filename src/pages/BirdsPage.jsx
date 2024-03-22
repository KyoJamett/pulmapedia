import { BirdsList } from "../components/BirdsList";
import { useBirds } from "../hooks/useBirds";

export function BirdsPage() {
  const { birds } = useBirds();
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <BirdsList birds={birds} />
        </div>
      </div>
    </>
  );
}
