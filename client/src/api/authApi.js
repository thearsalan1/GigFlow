import api from "./axios";

export const logoutUser = () => {
  return api.post("/auth/logout");
};
