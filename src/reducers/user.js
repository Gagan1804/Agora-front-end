import { ADD_TOKEN } from "../actions/names";

const user = (state = {}, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return { ...action.data };
    default:
      return state;
  }
};

export default user;
