import { TNewPost, TNewUser } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  SignOut,
  createPost,
  createUser,
  deletePost,
  getPostById,
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
        queryKey: ["getRecentPosts"],
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
    queryKey: ["getRecentPosts"],
    queryFn: getRecentHacks,
  });
};

export const useRecentSemis = () => {
  return useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: getRecentSemis,
  });
};

export const useRecentEvents = () => {
  return useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: getRecentEvents,
  });
};

export const useRecentWorks = () => {
  return useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: getRecentWorks,
  });
};

export const usePostById = (postId: string) => {
  return useQuery({
    queryKey: ["getPostById", postId],
    queryFn: () => getPostById(postId),
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ postID, imageID }: { postID?: string; imageID: string }) =>
      deletePost(postID, imageID),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getRecentPosts"],
      });
    },
  });
};
