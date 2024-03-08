import { TNewPost, TNewUser } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  SignOut,
  createPost,
  createUser,
  getRecentHacks,
  getRecentPosts,
  logIn,
} from "../appwrite/api";

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
        queryKey: ["getRecentPosts"],
      });
    },
  });
};

export const useRecentPosts = () => {
  return useQuery({
    queryKey: [],
    queryFn: getRecentPosts,
  });
};

export const useRecentHacks = () => {
  return useQuery({
    queryKey: [],
    queryFn: getRecentHacks,
  });
};
