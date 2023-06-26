const initState = {
  records: [],
};
const recordReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return {
        ...state,
        records: [...state.records, action.payload],
      };
      default:
        return state;
  }
};
export default recordReducer
