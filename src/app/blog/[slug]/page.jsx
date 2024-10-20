import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/28115442/pexels-photo-28115442/free-photo-of-a-picnic-table-with-plates-cups-and-tea-cups.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt="user image"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Omar Assar</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nihil
          sunt voluptate ducimus at, repellendus soluta commodi. Rerum,
          accusamus. Sit quas id sequi fugit mollitia nemo facilis reiciendis
          omnis aliquid.lorem Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Provident commodi rem, assumenda, modi sequi sit,
          laboriosam quo praesentium vel hic totam fuga! Vel quibusdam molestias
          dolorum ea dolores quod harum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In aliquam odit explicabo voluptatem, a itaque omnis
          sint ipsa provident repellat perspiciatis animi eligendi sequi nemo
          nesciunt doloribus ipsam accusantium nobis.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
