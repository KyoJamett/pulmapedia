import { BirdsList } from "./components/BirdsList";

export function MainApp() {
  const dummies = [
    {
      id: 1,
      name: "Chincol",
      description:
        "Son aves solitarias, que sólo forman parejas en época de reproducción. Se alimentan principalmente de semillas y gusanos.",
      area: "Praderas y bosques",
    },
    {
      id: 2,
      name: "Tenca",
      description:
        "Gran cantora, puede imitar el sonido de otros pájaros. Suele anidar en árboles con espinas, y pone 3 huevos.",
      area: "Laderas de cerros con arbustos",
    },
  ];
  return (
    <>
      <div className="container my-4">
        <h3>Pulmapedia</h3>
        <div className="row">
          <BirdsList birds={dummies} />
        </div>
      </div>
    </>
  );
}
