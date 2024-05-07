import { useReducer } from "react";
import { BirdForm } from "../components/BirdForm";
import { BirdsList } from "../components/BirdsList";
import { useBirds } from "../hooks/useBirds";
import { birdsReducer } from "../reducers/birdsReducer";
import { BirdModalForm } from "../components/BirdModalForm";

export function BirdsPage() {
  const {
    birds,
    initialBirds,
    initialBirdSelected,
    aboutUs,
    initialBirdForm,
    handlerAddBird,
    handlerRemoveBird,
    handlerBirdSelectedForm,
    birdSelected,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useBirds();

  return (
    <>
      {!visibleForm || (
        <BirdModalForm
          birdSelected={birdSelected}
          handlerCloseForm={handlerCloseForm}
          handlerAddBird={handlerAddBird}
        />
      )}

      <div className="container my-4">
        <div className="row">
          {birds.length === 0 ? (
            <div className="alert alert-warning">
              No hay registros en el sistema
            </div>
          ) : (
            <BirdsList
              birds={birds}
              handlerRemoveBird={handlerRemoveBird}
              handlerBirdSelectedForm={handlerBirdSelectedForm}
              visibleForm={visibleForm}
              handlerOpenForm={handlerOpenForm}
            />
          )}
        </div>
        {/*!visibleForm || (
          <div className="row">
            <BirdForm
              handlerAddBird={handlerAddBird}
              birdSelected={birdSelected}
              handlerCloseForm={handlerCloseForm}
            />
          </div>
        )*/}
      </div>
    </>
  );
}
