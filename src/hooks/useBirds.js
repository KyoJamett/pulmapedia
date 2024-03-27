const birds = [
  {
    id: 1,
    name: "Chincol",
    description:
      "Son aves solitarias, que sólo forman parejas en época de reproducción. Se alimentan principalmente de semillas y gusanos.",
    area: "Praderas y bosques",
    more: "Mide unos 15 cms. de largo. Su cara y cresta son grises con bandas laterales negras. Tiene un collar ancho castaño alrededor del cuello, y su vientre y partes inferiores son blanquecinas. Sus alas y cola son gris oscuras con algo de canela y dos bandas blancas. Son aves solitarias, que sólo forman parejas en época de reproducción. Se alimentan principalmente de semillas y gusanos.",
  },
  {
    id: 2,
    name: "Tenca",
    description:
      "Gran cantora, puede imitar el sonido de otros pájaros. Suele anidar en árboles con espinas, y pone 3 huevos.",
    area: "Laderas de cerros con arbustos",
    more: "Mide 28 cms, y se asemeja al zorzal. Tiene las partes superiores café obscuras y las partes inferiores gris café pálidas. Su garganta es blanquecina con estrías más oscuras en el vientre. Tiene una conspicua ceja blanca y una cola larga de color café oscuro con mancha blanca en borde terminal externo. Gran cantora, puede imitar el sonido de otros pájaros. Suele anidar en árboles con espinas, y pone 3 huevos.",
  },
];

const initialBirdSelected = {
  id: 0,
  name: "no name",
  description: "no description",
  area: "no area",
  more: "no info",
};

export const useBirds = () => {
  return {
    birds,
    initialBirdSelected,
  };
};
