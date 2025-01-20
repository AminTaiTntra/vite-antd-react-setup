import { SET_LANGUAGE } from "../actions/language";

const languageReducer = (language = "en-US", action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.payload;
    }
    default: {
      return language;
    }
  }
};

export default languageReducer;
