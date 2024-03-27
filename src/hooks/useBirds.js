const birds = [
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

const initialBirdSelected = {
  id: 0,
  name: "no name",
  description: "no description",
  area: "no area",
};

export const useBirds = () => {
  return {
    birds,
    initialBirdSelected,
  };
};
