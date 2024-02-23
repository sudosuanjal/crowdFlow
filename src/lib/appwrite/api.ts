import { TNewUser } from "@/types";
import { account, appwriteConfig, avatars, datebases } from "./config";
import { ID, Query } from "appwrite";

export async function createUser(user: TNewUser) {
  try {
    console.log("reached createUser up");
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    console.log("reached createUser down");

    if (!newAccount) throw Error;

    const avatarURl = avatars.getInitials(user.name);
    console.log("before saveUserToDB");

    const newUser = await saveUserToDB({
      accountID: newAccount.$id,
      name: newAccount.name,
      username: user.username,
      email: newAccount.email,
      imageURL: avatarURl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function saveUserToDB(user: {
  accountID: string;
  name: string;
  username: string;
  email: string;
  imageURL: URL;
}) {
  try {
    console.log("reached saveUserToDB");

    const newUser = await datebases.createDocument(
      appwriteConfig.datebaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );

    if (!newUser) throw Error;
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function logIn(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);
    if (!session) throw Error;
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccount() {
  try {
    const currentAccount = await account.get();
    console.log(`currentAccount: ${currentAccount}`);

    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await datebases.listDocuments(
      appwriteConfig.datebaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountID", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}
