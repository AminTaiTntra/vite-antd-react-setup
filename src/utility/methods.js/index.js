import { message } from "antd";

const getUserName = () => {
  if (localStorage.isChecked === "true" || localStorage.isChecked === true) {
    return localStorage.username;
  } else {
    return "";
  }
};

 const showSuccess = (messageData, time = 10000) => {
  message.destroy();
  messageData &&
    message.success({
      content: messageData,
      className: "show-toast-message",
      time,
    });
};

 const showError = (messageData, time = 10) => {
  message.destroy();
  messageData &&
    message.error({
      content: messageData,
      className: "show-toast-message",
      time,
    });
};

export { getUserName, showError, showSuccess };
