import Head from "next/head";
import styles from "../styles/Home.module.scss";
import PremiumSubscriber from "../pages/PremiumSubscriber";

import MainLayout from "../components/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main className={styles.main}>
          <PremiumSubscriber />
        </main>
      </div>
    </MainLayout>
  );
}
