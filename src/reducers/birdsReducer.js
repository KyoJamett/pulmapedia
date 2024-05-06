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
    case "removeBird":
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
};
