import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Library.module.css";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Library() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Library PiedBot, Clubfoot, طريقة ميلي</title>
        <meta
          name="description"
          content="library, bibliothèque, مرجع"
          key="desc"
        />
      </Head>
      <section className={styles.intro}>
        <img
          className={styles.introImg}
          alt="mili-img"
          src="/images/Library-intro.png"
        />
        <div className={styles.overlay}>
          <div className="med">
            <h1
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.title}
            >
              {t("library_title")}
            </h1>
            <br />
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.desc}
            >
              {t("library_subtitle")}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          {t("conference_&_training")}
        </h2>
        <span className="myHr" />
        <div className={styles.row}>
          <div
            className={styles.card3}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Carousel>
              <img src="/images/Library/1/1.jpg" alt="image1" />

              <img src="/images/Library/1/2.jpg" alt="image2" />

              <img src="/images/Library/1/3.jpg" alt="image3" />

              <img src="/images/Library/1/4.jpg" alt="image4" />

              <img src="/images/Library/1/5.jpg" alt="image5" />

              <img src="/images/Library/1/6.jpg" alt="image5" />
            </Carousel>
            <hr />
            <p>{t("library_1")}</p>
          </div>
          <div
            className={styles.card3}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Carousel>
              <div>
                <img src="/images/Library/2/1.jpg" alt="image1" />
              </div>
              <div>
                <img src="/images/Library/2/2.jpg" alt="image2" />
              </div>
              <div>
                <img src="/images/Library/2/3.jpg" alt="image3" />
              </div>
              <div>
                <img src="/images/Library/2/4.jpg" alt="image4" />
              </div>
            </Carousel>
            <hr />
            <p>{t("library_2")}</p>
          </div>
          <div
            className={styles.card3}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Carousel>
              <div>
                <img src="/images/Library/3/1.jpg" alt="image1" />
              </div>
              <div>
                <img src="/images/Library/3/2.jpg" alt="image2" />
              </div>
              <div>
                <img src="/images/Library/3/3.jpg" alt="image3" />
              </div>
              <div>
                <img src="/images/Library/3/4.jpg" alt="image4" />
              </div>
            </Carousel>
            <hr />
            <p>{t("library_3")}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={styles.card1}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Carousel>
              <div>
                <img src="/images/Library/6/1.jpg" alt="image1" />
              </div>
            </Carousel>
            <hr />
            <p>{t("library_6")}</p>
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={styles.card2}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Carousel>
              <div>
                <img src="/images/Library/4/1.jpg" alt="image1" />
              </div>
              <div>
                <img src="/images/Library/4/2.jpg" alt="image2" />
              </div>
              <div>
                <img src="/images/Library/4/3.jpg" alt="image3" />
              </div>
              <div>
                <img src="/images/Library/4/4.jpg" alt="image4" />
              </div>
              <div>
                <img src="/images/Library/4/5.jpg" alt="image5" />
              </div>
            </Carousel>
            <hr />
            <p>{t("library_4")}</p>
          </div>
          <div
            className={styles.card2}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Carousel>
              <div>
                <img src="/images/Library/5/1.jpg" alt="image1" />
              </div>
              <div>
                <img src="/images/Library/5/2.jpg" alt="image2" />
              </div>
              <div>
                <img src="/images/Library/5/3.jpg" alt="image3" />
              </div>
              <div>
                <img src="/images/Library/5/4.jpg" alt="image4" />
              </div>
              <div>
                <img src="/images/Library/5/5.jpg" alt="image5" />
              </div>
              <div>
                <img src="/images/Library/5/6.jpg" alt="image6" />
              </div>
            </Carousel>
            <hr />
            <p>{t("library_5")}</p>
          </div>
        </div>
        <h3 data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
          {t("video_title")}
        </h3>
        <video
          controls
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <source src="/videos/conference_1.mp4" type="video/mp4" />
        </video>
        <h3 data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
          {t("video3_title")}
        </h3>
        <video
          poster="/videos/thumbnail_mili.png"
          controls
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <source src="/videos/DOC MILLI.mp4" type="video/mp4" />
        </video>
      </section>
      <section className={styles.container}>
        <h2
          style={{ marginTop: "60px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("media_shows")}
        </h2>
        <span className="myHr" />
        <h3 data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
          {t("video2_title")}
        </h3>
        <video
          controls
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <source src="/videos/tv_show1.mp4" type="video/mp4" />
        </video>
        <h3 data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
          {t("tv_shows")}
        </h3>
        <div className={styles.rowImg}>
          <div
            className={styles.cardImg}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src="/images/Library/passages/1.jpg" alt="show1" />
          </div>
          <div
            className={styles.cardImg}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src="/images/Library/passages/2.jpg" alt="show2" />
          </div>
        </div>
        <div className={styles.rowImg}>
          <div
            className={styles.cardImg}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src="/images/Library/passages/3.jpg" alt="show3" />
          </div>
          <div
            className={styles.cardImg}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src="/images/Library/passages/4.jpg" alt="show4" />
          </div>
        </div>
        <div className={styles.rowImg}>
          <div
            className={styles.cardImg}
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src="/images/Library/passages/5.jpg" alt="show5" />
          </div>
          <div
            className={styles.cardImg}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src="/images/Library/passages/6.jpg" alt="show6" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Library;
