export const getBaseURL = () => {
  if (!import.meta.env.VITE_APP_ENV) {
    return import.meta.env.VITE_APP_LOCAL_URL;
  } else if (import.meta.env.VITE_APP_ENV === "QATest") {
    return import.meta.env.VITE_APP_QA_TEST_URL;
  } else if (import.meta.env.VITE_APP_ENV === "staging") {
    return import.meta.env.VITE_APP_STAGING_URL;
  } else if (import.meta.env.NODE_ENV === "production") {
    return import.meta.env.VITE_APP_PRODUCTION_URL;
  }
};

export { getBaseURL };
