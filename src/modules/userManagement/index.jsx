import { getUserList } from "../../api/userManagement";
import useCommonListingHook from "../../hooks/useCommonListingHook";
import UserList from "./userList";

const UserManagement = () => {
  const [{rowData},{}] = useCommonListingHook({
    getAPIFun: getUserList,
  });
  return (
    <div>
      <UserList rowData={rowData}/>
    </div>
  );
};

export default UserManagement;
