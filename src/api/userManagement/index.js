import { get } from "../../setup/client";
import endpoints from "../endpoint";

const getUserList = (body) =>
  get(endpoints.userManagement.list, { ...body });

export {
    getUserList
}