import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: "65a52903e6a44a6ec4db",
  url: import.meta.env.VITE_APPWRITE_URl,
  datebaseId: "65a91dc88f065a1275ce",
  storageId: "65a91d5582636be8d2e0",
  userCollectionId: "65a91e62ba082109ff50",
  postCollectionId: "65a91e1088b582b0e386",
  savesCollectionId: "65a91e85b0416cf5343f",
};

export const client = new Client();
client.setProject("65a52903e6a44a6ec4db");
client.setEndpoint("https://cloud.appwrite.io/v1");

export const account = new Account(client);
export const datebases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
