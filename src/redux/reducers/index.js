const initialState = {
  preferiti: [],
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PREFERRED_COMPANY":
      return {
        ...state,
        preferiti: [...state.preferiti, action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
