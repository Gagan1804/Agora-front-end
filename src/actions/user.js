import { ADD_TOKEN } from "./names";

const addToken = data => {
  return {
    type: ADD_TOKEN,
    data
  };
};

export { addToken };
