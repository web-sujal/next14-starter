import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { Noto_Sans_Gunjala_Gondi } from "next/font/google";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

// Fetch data using api
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // fetch data with api
  const post = await getData(slug);

  // fetch data without api
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="" fill />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </div>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
