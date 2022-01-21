import { useAppContext } from "../Contexts/AppWrapper";
import styles from "../styles/Article.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Article() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const { setShowArticle, articleBody, articleTitle } = useAppContext();
  return (
    <>
      <span
        onClick={() => {
          setShowArticle(false);
        }}
        className={styles.closeBtn}
      >
        <h1>&times;</h1>
      </span>
      <section className={styles.container}>
        <div className={styles.card}>
          <h3>{t(articleTitle)}</h3>
          <hr />
          <p>{t(articleBody)}</p>
        </div>
      </section>
    </>
  );
}
export default Article;
