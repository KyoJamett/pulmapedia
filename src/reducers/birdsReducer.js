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

    case "updateBird":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return u;
      });

    default:
      return state;
  }
};
