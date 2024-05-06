import { useReducer } from "react";
import { birdsReducer } from "../reducers/birdsReducer";

const initialBirds = [
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
  {
    id: 3,
    name: "Diuca",
    description:
      "Su coloración general es gris con mancha blanca en la garganta y abdomen, y sectores acanelados en el bajo vientre.",
    area: "Toda clase de ambientes, desde campos, pueblos, cerros o plazas",
    more: "Alcanza 17,5 cm de altura. Sus alas y cola son negruzcas, esta última con mancha blanca en la parte Terminal. Anidan en arbustos y árboles chicos, poniendo 2, 3 o 4 huevos de color azul-verdoso pálido con manchas café.",
  },
];

const initialBirdSelected = {
  id: 0,
  name: "no name",
  description: "no description",
  area: "no area",
  more: "no info",
};

const initialBirdForm = {
  name: "",
  description: "",
  area: "",
  more: "",
};

const aboutUs = {
  desc: "Pulmapedia es un proyecto personal que busca crear una enciclopedia de las aves de mi región, la region de Valparaíso. Esto nace con la idea de tener a la mano una suerte de pokédex para aquellas personas que no sepan reconocer un ave cuando la vean.",
};

export const useBirds = () => {
  const [birds, dispatch] = useReducer(birdsReducer, initialBirds);

  const handlerAddBird = (bird) => {
    console.log(bird);
    dispatch({
      type: "addBird",
      payload: bird,
    });
  };

  const handlerRemoveBird = (id) => {
    console.log(id);
    dispatch({
      type: "removeBird",
      payload: id,
    });
  };

  return {
    birds,
    initialBirds,
    initialBirdSelected,
    aboutUs,
    initialBirdForm,

    handlerAddBird,
    handlerRemoveBird,
  };
};
