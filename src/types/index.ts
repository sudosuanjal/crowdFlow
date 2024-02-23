import { promises } from "dns";
import React from "react";

export type TNavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type TUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageURL: URL | string;
  file: File[];
};

export type TNewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type TUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type TUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageURL: string;
  bio: string;
};

export type TNewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type TContextType = {
  user: TUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};
