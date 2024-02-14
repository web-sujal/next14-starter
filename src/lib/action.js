"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectDb();

    await Post.create({
      title,
      desc,
      slug,
      userId,
    });

    console.log("post created successfully.");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (id) => {
  try {
    connectDb();

    await Post.findByIdAndDelete(id);

    console.log("post deleted successfully.");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleLogout = async () => {
  "use server";

  await signOut();
};

export const handleRegister = async (formData) => {
  "use server";

  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Passwords do not match.";
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectDb();

    const user = await User.findOne({ email });

    if (user) {
      return "User already exists.";
    }

    await User.create({
      username,
      email,
      password: hashedPassword,
      img,
    });
    console.log("saved to db");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to register the user.");
  }
};
