import { post } from "../../setup/client";
import endpoints from "../endpoint";

const login = (body) => post(endpoints.authentication.login, { ...body });

export { login };
