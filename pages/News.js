import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/News.module.css";
import { useRouter } from "next/router";
import Article from "../components/Article";
import { useAppContext } from "../Contexts/AppWrapper";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function News() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const { showArticle, setShowArticle, setArticleBody, setArticleTitle } =
    useAppContext();

  return (
    <>
      <Head>
        <title>News | Pied Bot, Clubfoot, طريقة ميلي</title>
        <meta
          name="description"
          content="mili method news, actualités de méthode mili, أخبار طريقة ميلي"
          key="desc"
        />
      </Head>
      <section className={styles.intro}>
        <img
          className={styles.introImg}
          alt="mili-img"
          src="/images/News-intro.jpg"
        />
        <div className={styles.overlay}>
          <div className="med">
            <h1
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.title}
            >
              {t("news_title")}
            </h1>
            <br />
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.desc}
            >
              {t("news_description")}
            </p>
          </div>
        </div>
        {showArticle ? (
          <Article
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-delay="600"
          />
        ) : null}
      </section>
      <section className={styles.container}>
        <div className={styles.row}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-delay="300"
            className={styles.card3}
          >
            <h4>{t("article1_title")}</h4>
            <hr />
            <p>{t("article1_body")}</p>
            <a
              onClick={() => {
                setArticleTitle("article1_title");
                setArticleBody("article1_body");
                setShowArticle(true);
              }}
              className={styles.introBtn}
            >
              {t("read_more")}
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-delay="400"
            className={styles.card3}
          >
            <h4>{t("article2_title")}</h4>
            <hr />
            <p>{t("article2_body")}</p>
            <a
              onClick={() => {
                setArticleTitle("article2_title");
                setArticleBody("article2_body");
                setShowArticle(true);
              }}
              className={styles.introBtn}
            >
              {t("read_more")}
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-delay="500"
            className={styles.card3}
          >
            <h4>{t("article3_title")}</h4>
            <hr />
            <p>{t("article3_body")}</p>
            <a
              onClick={() => {
                setArticleTitle("article3_title");
                setArticleBody("article3_body");
                setShowArticle(true);
              }}
              className={styles.introBtn}
            >
              {t("read_more")}
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-delay="600"
            className={styles.card2}
          >
            <h4>{t("article4_title")}</h4>
            <hr />
            <p>{t("article4_body")}</p>
            <a
              onClick={() => {
                setArticleTitle("article4_title");
                setArticleBody("article4_body");
                setShowArticle(true);
              }}
              className={styles.introBtn}
            >
              {t("read_more")}
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-delay="700"
            className={styles.card2}
          >
            <h4>{t("article5_title")}</h4>
            <hr />
            <p>{t("article5_body")}</p>
            <a
              onClick={() => {
                setArticleTitle("article5_title");
                setArticleBody("article5_body");
                setShowArticle(true);
              }}
              className={styles.introBtn}
            >
              {t("read_more")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default News;
