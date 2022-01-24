import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [counterIsVisible, setCounterIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "scroll",
      function () {
        var element = document.querySelector("#stats");
        if (element) {
          var position = element.getBoundingClientRect();
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            setCounterIsVisible(true);
          }
        }
      },
      []
    );
  });

  return (
    <>
      <section className={styles.intro}>
        <video className={styles.introImg} autoPlay loop muted>
          <source src="/videos/giff.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <div className="med">
            <h2
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.subtitle}
            >
              {t("site_service")}
            </h2>
            <h1 data-aos="flip-up" className={styles.title}>
              {t("site_method")}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.desc}
            >
              {t("site_intro")}
            </p>
            <Link href="/Mili">
              <a className={styles.introBtn}>{t("intro_btn")}</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.aboutMili}>
        <div className="container">
          <br />
          <h2>{t("modern")}</h2>
          <p>{t("about_mili")}</p>
        </div>
      </section>
      <section className={locale === "ar" ? styles.reverseNews : styles.news}>
        <div className={styles.col2}>
          <div className={locale === "ar" ? styles.reverseRow : styles.row}>
            <img
              className={styles.col4}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              src="/images/icons/info.png"
              alt="icon"
            />
            <div
              className={styles.col8}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h3>{t("explication")}</h3>
              <p>{t("explication-content")}</p>
            </div>
          </div>
          <div className={locale === "ar" ? styles.reverseRow : styles.row}>
            <img
              className={styles.col4}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              src="/images/icons/genetics.png"
              alt="icon"
            />
            <div
              className={styles.col8}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h3>{t("genetics")}</h3>
              <p>{t("genetics-content")}</p>
            </div>
          </div>
          <div className={locale === "ar" ? styles.reverseRow : styles.row}>
            <img
              className={styles.col4}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              src="/images/icons/types.png"
              alt="icon"
            />
            <div
              className={styles.col8}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h3>{t("types")}</h3>
              <p>{t("types-content")}</p>
            </div>
          </div>
        </div>
        <div className={locale === "ar" ? styles.colImgL : styles.colImgR}>
          <img
            className={styles.row}
            data-aos="fade-side"
            data-aos-duration="1000"
            data-aos-delay="300"
            src="/images/medical.jpg"
            alt="icon"
          />
        </div>
      </section>
      <section className={styles.innovations}>
        <h2>{t("innovations")}</h2>
        <p style={{ marginBottom: "60px" }}>{t("innovations-description")}</p>
        <div className={styles.innovationsCntainer}>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.col5}
          >
            <img src="./images/icons/injury.png" />
            <p>{t("dynamic_actives")}</p>
          </div>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.col5}
          >
            <img src="./images/icons/processing.png" />
            <p>{t("simultaneous_correction")}</p>
          </div>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.col5}
          >
            <img src="./images/icons/blood.png" />
            <p>{t("traction_actives")}</p>
          </div>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.col5}
          >
            <img src="./images/icons/intervention.png" />
            <p>{t("morphogenesis")}</p>
          </div>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.col5}
          >
            <img src="./images/icons/first-steps.png" />
            <p>{t("auto_education")}</p>
          </div>
        </div>
      </section>
      <br />
      <section id="stats" className={styles.stats}>
        <h2>{t("clubfoot-numbers")}</h2>
        <br />
        <div className={styles.col3}>
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.icon}
            alt="children"
            src="./images/icons/children.png"
          />
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {counterIsVisible ? (
              <h4>
                <CountUp end={70} duration={1.3} /> %
              </h4>
            ) : (
              ""
            )}
            <p>{t("gender")}</p>
          </div>
        </div>
        <div className={styles.col3}>
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.icon}
            alt="children"
            src="./images/icons/frequency.png"
          />
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {counterIsVisible ? (
              <h4>
                <CountUp end={2} duration={1.3} />
              </h4>
            ) : (
              ""
            )}
            <h4>/</h4>
            {counterIsVisible ? (
              <h4>
                <CountUp end={1000} duration={1.3} />
              </h4>
            ) : (
              ""
            )}
            <p>{t("frequency")}</p>
          </div>
        </div>
        <div className={styles.col3}>
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={styles.icon}
            alt="children"
            src="./images/icons/baby-feet.png"
          />
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {counterIsVisible ? (
              <h4>
                <CountUp end={50} duration={1.3} /> %
              </h4>
            ) : (
              ""
            )}
            <p>{t("sides")}</p>
          </div>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <h3 data-aos="flip-up">{t("video4_title")}</h3>
        <video
          poster="/videos/thumbnail_home.png"
          controls
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <source src="/videos/doctor mili version L.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
