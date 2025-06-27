import { useState } from "react";
import { useFetchData } from "./useFetchData";

const useCommonListingHook = ({ getAPIFun = () => {}, listingSuccessMessage = true }) => {
  const [triggerApiCall, setTriggerApiCall] = useState(false);
  const [rowData, setRowData] = useState();
  const [body, setBody] = useState({
    search: "",
    current_page: 1,
    page_size: 10,
    total_entries: "",
    next: "",
    ordering: "",
    column_filters: [],
  });

  //! API Success Callback Function
  const successCallback = (data, key) => {
    switch (key) {
      case "get":
        setRowData(data.data ?? []);
        setBody((state) => ({
          ...state,
          total_entries: data?.pagination?.total_entries,
          next: data?.pagination?.next,
        }));
        break;
      case "activeInactive":
        setTriggerApiCall(!triggerApiCall);
        break;
      default:
        break;
    }
  };

  const [{ isLoading }] = useFetchData({
    apiFunction: getAPIFun,
    dependencyArray: [
      triggerApiCall,
      body.current_page,
      body.page_size,
      body.ordering,
      body.search,
      body.column_filters,
    ],
    apiParams: body,
    apiCallCondition: Object.keys(body).length || true,
    showSuccessMessage: listingSuccessMessage,
    showErrorMessage: true,
    successCallback: (data) => successCallback(data, "get"),
  });

  return [{rowData}, {}];
};

export default useCommonListingHook