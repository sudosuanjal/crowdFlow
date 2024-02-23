import { TNewUser } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { createUser, logIn } from "../appwrite/api";

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
