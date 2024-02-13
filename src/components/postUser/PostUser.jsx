import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img || "/noavatar.png"}
        alt="avatar"
        height={50}
        width={50}
      />
      <div className={styles.textContainer}>
        <div className={styles.title}>Author</div>
        <div className={styles.username}>{user.username}</div>
      </div>
    </div>
  );
};

export default PostUser;
