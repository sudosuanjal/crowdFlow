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
  title: string;
  sm_des: string;
  about: string;
  date: string;
  time: string;
  file: File[];
  type: string;
  line: string;
  paid: string;
  invite: string;
  link: string;
};

export type TUpdatePost = {
  postId: string;
  imageID: string;
  imageURL: URL;
  title: string;
  sm_des: string;
  about: string;
  date: string;
  time: string;
  file: File[];
  type: string;
  line: string;
  paid: string;
  invite: string;
  link: string;
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
