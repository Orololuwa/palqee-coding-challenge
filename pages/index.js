import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PALQEE CODING CHALLENGE</title>
        <meta
          name="description"
          content="Coding challenge solution Emmanuel Awolusi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Coding challenge</p>
      </main>
    </div>
  );
}
