"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDb } from "./utils";

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
