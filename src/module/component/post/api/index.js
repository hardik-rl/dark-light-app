import api from "../../../../shared/api";

export const getAllPost = () => {
  return api.get("/posts");
}
