import axios from "axios";
import { User } from "../stores/type";
const route = "users";

export const getAllUser = (accessToken: string) =>
  axios.get(`/${route}/get/all`, {
    headers: {
      Authorization: `Beaer ${accessToken}`,
    },
  });

export const getUserById = (id: string) => axios.get(`/${route}/get/id/${id}`);

export const getUserByUsername = (username: string) =>
  axios.get(`/${route}/get/username/${username}`);

export const follow = (toId: string, fromId: string) =>
  axios.put(`/${route}/${toId}/follow`, {
    id: fromId,
  });
export const updateUser = (data: User) =>
  axios.put(`/${route}/${data._id}`, {
    _id: data._id,
    image: data.image,
    email: data.email,
    username: data.username,
    bio: data.bio,
    password: data.password,
  });

export const unFollow = (id: string) => {
  axios.delete(`/${route}/${id}/follow`);
};
