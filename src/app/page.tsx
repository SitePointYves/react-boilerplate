
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/dashboard">Dashboard</Link>
        <br></br>
        <Link href="/test">test</Link>
      </div>
    </main>
  );
}
