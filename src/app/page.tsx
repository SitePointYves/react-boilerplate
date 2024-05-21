import styles from "./page.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t("title")}</h1>
        <Link href="/dashboard">Dashboard</Link>
        <br></br>
        <Link href="/test">test</Link>
        <br></br>
      </div>
    </main>
  );
}
