import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We Create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision We're world's Our
          special team best consulting & finance solution provider. Wide range
          of web software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
        className={styles.img}
        src="/about.png"
        alt="about image"
        fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
