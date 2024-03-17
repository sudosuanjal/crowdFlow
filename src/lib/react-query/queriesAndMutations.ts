import { TNewPost, TNewUser } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  SignOut,
  createPost,
  createUser,
  getRecentEvents,
  getRecentHacks,
  getRecentPosts,
  getRecentSemis,
  getRecentWorks,
  logIn,
} from "../appwrite/api";

//get req
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: TNewUser) => createUser(user),
  });
};

export const useLogIn = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) => logIn(user),
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: SignOut,
  });
};

//posts

export const useCreatePost = () => {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: (post: TNewPost) => createPost(post),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: [
          "getRecentPosts",
          "getRecentHacks",
          "getRecentSemis",
          "getRecentEvents",
          "getRecentWorks",
        ],
      });
    },
  });
};

export const useRecentPosts = () => {
  return useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: getRecentPosts,
  });
};

export const useRecentHacks = () => {
  return useQuery({
    queryKey: ["getRecentHacks"],
    queryFn: getRecentHacks,
  });
};

export const useRecentSemis = () => {
  return useQuery({
    queryKey: ["getRecentSemis"],
    queryFn: getRecentSemis,
  });
};

export const useRecentEvents = () => {
  return useQuery({
    queryKey: ["getRecentEvents"],
    queryFn: getRecentEvents,
  });
};

export const useRecentWorks = () => {
  return useQuery({
    queryKey: ["getRecentWorks"],
    queryFn: getRecentWorks,
  });
};
