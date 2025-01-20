const getUserName = () => {
  if (localStorage.isChecked === "true" || localStorage.isChecked === true) {
    return localStorage.username;
  } else {
    return "";
  }
};

export { getUserName };
