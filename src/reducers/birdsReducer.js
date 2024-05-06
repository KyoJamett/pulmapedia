export const birdsReducer = (state = [], action) => {
  switch (action.type) {
    case "addBird":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];

    default:
      return state;
  }
};
