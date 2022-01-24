import styles from "../styles/Mili.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Mili() {
  function toggleStepDescription(id) {
    if (document.getElementById(id).classList.contains("showme")) {
      document.getElementById(id).classList.remove("showme");
    } else {
      document.getElementById(id).classList.add("showme");
    }
  }
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <section className={styles.intro}>
        <img
          className={styles.introImg}
          alt="mili-img"
          src="/images/mili-old.jpeg"
        />
        <div className={styles.overlay}>
          <div className="med">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={styles.circle}
              src="./images/doctor.jpg"
            />
            <h1
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("doctor_info")}
            </h1>
            <p>{t("doctor_info_description")}</p>
            <Link href="/Contact">
              <a className={styles.contactBtn}>{t("contacts")}</a>
            </Link>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "40px" }}>
        <div className={styles.slogan}>
          <h1>{t("professional_motivated_human")}</h1>
          <hr />
        </div>

        <div className={styles.row}>
          <div
            className={locale === "ar" ? styles.rcol2 : styles.col2}
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {t("mili_description_rest_1")}
          </div>
          <div
            className={locale === "ar" ? styles.rcol2 : styles.col2}
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img
              className={styles.img}
              src="./images/MiliMethod/goniometer.jpg"
            />
          </div>
        </div>
        <span className="myHr" />
        <div className={styles.row}>
          <div
            className={locale === "ar" ? styles.rcol2 : styles.col2}
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img className={styles.img} src="./images/MiliMethod/stimul3.jpg" />
          </div>
          <div
            className={locale === "ar" ? styles.rcol2 : styles.col2}
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {t("mili_description_rest_2")}
          </div>
        </div>
        <span className="myHr" />
        <div className={styles.row}>
          <div
            className={locale === "ar" ? styles.rcol2 : styles.col2}
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {t("mili_description_rest_3")}
          </div>
          <div
            className={locale === "ar" ? styles.rcol2 : styles.col2}
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img className={styles.img} src="./images/MiliMethod/marteau.jpg" />
          </div>
        </div>
        <span className="myHr" id="treatment" />
      </section>
      <section className={styles.treatment}>
        <h2>{t("treatment_title")}</h2>
        <div
          onClick={() => {
            toggleStepDescription("step1");
          }}
          className={styles.box}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1>{t("treatment_step1")}</h1>
          <p id="step1" className="steps">
            {t("treatment_step1_description")}
          </p>
          <img src="/images/icons/down-arrow.png" />
        </div>
        <div
          onClick={() => {
            toggleStepDescription("step2");
          }}
          className={styles.box}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1>{t("treatment_step2")}</h1>
          <p id="step2" className="steps">
            {t("treatment_step2_description")}
          </p>
          <img src="/images/icons/down-arrow.png" />
        </div>
        <div
          onClick={() => {
            toggleStepDescription("step3");
          }}
          className={styles.box}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1>{t("treatment_step3")}</h1>
          <p id="step3" className="steps">
            {t("treatment_step3_description")}
          </p>
          <img src="/images/icons/down-arrow.png" />
        </div>
        <div
          onClick={() => {
            toggleStepDescription("step4");
          }}
          className={styles.box}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1>{t("treatment_step4")}</h1>
          <p id="step4" className="steps">
            {t("treatment_step4_description")}
          </p>
          <img src="/images/icons/down-arrow.png" />
        </div>
        <div
          onClick={() => {
            toggleStepDescription("step5");
          }}
          className={styles.box}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1>{t("treatment_step5")}</h1>
          <p id="step5" className="steps">
            {t("treatment_step5_description")}
          </p>
          <img src="/images/icons/down-arrow.png" />
        </div>
      </section>
      <section className={styles.results}>
        <Link href="/TreatedCases">
          <a className={styles.resultsBtn}>{t("results")}</a>
        </Link>
      </section>
      <section className={styles.precautions}>
        <h2>{t("precautions_title")}</h2>
      </section>
      <section className={styles.listBlock}>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>
          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_a")}
            </p>
          </div>
        </div>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>
          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_b")}
            </p>
          </div>
        </div>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>
          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_c")}
            </p>
          </div>
        </div>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>
          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_d")}
            </p>
          </div>
        </div>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>
          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_e")}
            </p>
          </div>
        </div>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>
          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_f")}
            </p>
          </div>
        </div>
        <div
          className={
            locale === "ar" ? styles.reverseListContainer : styles.listContainer
          }
        >
          <div
            data-aos={locale === "ar" ? "slide-left" : "slide-right"}
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                locale === "ar" ? styles.reverseListIcon : styles.listIcon
              }
            >
              <img src="/images/icons/list-head.png" />
            </div>
          </div>

          <div className={styles.list}>
            <p
              data-aos={locale === "ar" ? "slide-right" : "slide-left"}
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {t("precaution_g")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mili;
