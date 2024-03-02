import { TNewPost, TNewUser } from "@/types";
import { account, appwriteConfig, avatars, datebases, storage } from "./config";
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

export async function SignOut() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(post: TNewPost) {
  try {
    const uploadedFile = await upLoadFile(post.file[0]);

    if (!uploadedFile) throw Error;

    const fileUrl = await getFilePreview(uploadedFile.$id);

    if (!fileUrl) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    const createdPost = await datebases.createDocument(
      appwriteConfig.datebaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        creator: post.userId,
        title: post.title,
        sm_des: post.sm_des,
        about: post.about,
        date: post.date,
        time: post.time,
        imageURL: fileUrl,
        type: post.type,
        line: post.line,
        paid: post.paid,
        invite: post.invite,
        imageID: uploadedFile.$id,
      }
    );

    if (!createdPost) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    return createdPost;
  } catch (error) {
    console.log(error);
  }
}

export async function upLoadFile(file: File) {
  try {
    const uploadfile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );

    return uploadfile;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilePreview(fileId: string) {
  try {
    const fileUrl = await storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      "center",
      100
    );

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFile(fileId: string) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);
    return { status: "OK" };
  } catch (error) {
    console.log(error);
  }
}

// for getting the post of the current user
export async function getUserRecentPosts(userId: string) {
  if (!userId) return;

  try {
    const posts = await datebases.listDocuments(
      appwriteConfig.datebaseId,
      appwriteConfig.postCollectionId,
      [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
    );

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log(error);
  }
}
