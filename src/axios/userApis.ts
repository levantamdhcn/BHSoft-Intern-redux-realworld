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

export const follow = (toUsername: string, fromUsername: string) =>
  axios.put(`/${route}/${toUsername}/follow`, {
    username: fromUsername,
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

export const unFollow = (toUsername: string, fromUsername: string) => {
  axios.put(`/${route}/${toUsername}/unfollow`, {
    username: fromUsername,
  });
};
