import api from "../../../../shared/api";

export const getAllPost = (data) => {
  return api.get("/post",data);
}
