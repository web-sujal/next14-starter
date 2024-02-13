import { Post, User } from "./models";
import { connectDb } from "./utils";

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    if (!posts) throw new Error("Failed to fetch posts data.");

    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectDb();
    const post = await Post.find({ slug });
    if (!post) throw new Error("Failed to fetch post data.");

    return post;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch the post!");
  }
};

export const getUser = async (id) => {
  try {
    connectDb();
    const user = await User.findById(id);
    if (!user) throw new Error("Failed to fetch user data.");

    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    if (!users) throw new Error("Failed to fetch users data.");

    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};
