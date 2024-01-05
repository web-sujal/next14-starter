import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* text */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          officiis dolorum. Similique laborum illo recusandae praesentium nam.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>

      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          src="https://media.tenor.com/bnG9NZdIQe4AAAAi/pudgy-pudgypenguin.gif"
          alt="hero"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
