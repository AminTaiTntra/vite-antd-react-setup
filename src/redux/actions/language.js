const SET_LANGUAGE = "SET_LANGUAGE";

const changeLanguageAction = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export { changeLanguageAction, SET_LANGUAGE };
