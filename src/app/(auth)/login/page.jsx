import styles from "./login.module.css";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button className={styles.button}>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
