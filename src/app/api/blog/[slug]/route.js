import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectDb();

    await Post.findOneAndDelete({ slug });
    return NextResponse.json("Post deleted successfully.");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete post!");
  }
};
