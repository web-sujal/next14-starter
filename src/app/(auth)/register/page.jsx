import { handleRegister } from "@/lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleRegister} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button className={styles.button}>Login with Credentials</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
