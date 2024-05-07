import { BirdForm } from "./BirdForm";

export const BirdModalForm = ({
  birdSelected,
  handlerCloseForm,
  handlerAddBird,
}) => {
  return (
    <>
      <div className="abrir-modal animacion fadeIn">
        <div className="modal" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {birdSelected.id > 0 ? "Editar " : "Crear "}
                  Modal Especies
                </h5>
              </div>
              <div className="modal-body">
                <BirdForm
                  handlerAddBird={handlerAddBird}
                  birdSelected={birdSelected}
                  handlerCloseForm={handlerCloseForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
