import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Contact.module.css";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Contact() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const clear = () => {
    setFormData({ name: "", phone: "", message: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let feedbackDom = document.getElementById("feedback");

    if (formData.name === "") {
      feedbackDom.textContent = "Please enter your name";
      feedbackDom.style.color = "#F00";
      feedbackDom.style.display = "block";
      return;
    }
    if (formData.phone === "") {
      feedbackDom.textContent = "Please enter your phone";
      feedbackDom.style.color = "#F00";
      feedbackDom.style.display = "block";
      return;
    }
    var templateParams = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };
    const serviceID = "service_7rmrm67";
    const templateID = "template_l8csal8";
    const userID = "user_SLJ8sSNE36vqSQnSZKzPt";

    try {
      emailjs.send(serviceID, templateID, templateParams, userID);
      feedback.textContent = "Message sent successfully.";
      feedback.style.color = "#080";
      feedback.style.display = "block";
      clear();
    } catch (error) {
      console.log({ error });
      feedback.textContent = "Error, Try later please!";
      feedback.style.color = "#F00";
      feedback.style.display = "block";
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Pied Bot, Clubfoot, طريقة ميلي </title>
        <meta
          name="description"
          content="للتواصل مع السيد فرج ميلي , contactez Mr MILI Fraj, contact Mr Fraj MILI"
          key="desc"
        />
      </Head>
      <div className={styles.background}>
        <section className={styles.intro}>
          <img
            className={styles.introImg}
            alt="mili-img"
            src="/images/contact.png"
          />
          <div className={styles.overlay}>
            <div className={styles.headCard}>
              <div className={locale === "ar" ? styles.reverseRow : styles.row}>
                <div className={styles.col2}>
                  <h1 className={styles.title} data-aos="fade-up">
                    {t("appointment_title")}
                  </h1>
                </div>
                <div data-aos="slide-down" className={styles.col2}>
                  <div className={styles.card}>
                    <h1
                      className={
                        locale === "ar" ? "mb-2 flex rtl-row" : "mb-2 flex"
                      }
                    >
                      <img
                        src="/images/icons/clock.png"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                      &nbsp;
                      <div
                        className={
                          locale === "ar" ? "mb-2 flex rtl-row" : "mb-2 flex"
                        }
                      >
                        {t("working_hours")}
                      </div>
                    </h1>
                    <span className={styles.myHr} />

                    <span
                      className={
                        locale === "ar" ? "flex wrap rtl-row" : "flex wrap"
                      }
                    >
                      <h2>{t("working_description")}</h2>
                    </span>

                    <br />
                    <hr />
                    <br />
                    <span
                      className={
                        locale === "ar" ? "flex wrap rtl-row" : "flex wrap"
                      }
                    >
                      {t("online_reservation")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.getInTouch}>
          <div className="container">
            <h1 style={{ marginBottom: "50px", textTransform: "uppercase" }}>
              <span
                className={locale === "ar" ? "flex wrap rtl-row" : "flex wrap"}
              >
                {t("get_in_touch")}
              </span>
            </h1>
            <div
              className={locale === "ar" ? "flex wrap rtl-row" : "flex wrap"}
            >
              <div
                className="col50"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className={styles.contactInfo}>
                  <h2>
                    <span className={styles.smHr} />
                    <span>{t("contact_desc")}</span>
                  </h2>
                  <a
                    href="tel:+21650222522"
                    className={
                      locale === "ar" ? "mb-2 flex rtl-row" : "mb-2 flex"
                    }
                  >
                    <LocalPhoneIcon className={styles.icon} />
                    &nbsp;
                    <span className={styles.contactItem}></span>+216 50 222 522{" "}
                    <br />
                    +216 73 215 444
                  </a>
                  <a
                    href="mailto:mili.fraj@gmail.com"
                    className={
                      locale === "ar" ? "mb-2 flex rtl-row" : "mb-2 flex"
                    }
                  >
                    <EmailIcon className={styles.icon} />
                    &nbsp;
                    <span className={styles.contactItem}>
                      contact@piedbot-mili.com <br /> mili.fraj@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://goo.gl/maps/yvuKPLpTaJqsmojt8"
                    target="_blanc"
                    rel="noreferrer noopener"
                    className={
                      locale === "ar" ? "mb-2 flex rtl-row" : "mb-2 flex"
                    }
                  >
                    <RoomIcon className={styles.icon} />
                    &nbsp;
                    <span className={styles.contactItem}>
                      App 101 Imm Avicenne، IBN EL Jazzar St, Sousse
                    </span>
                  </a>
                </div>
                <div
                  className={
                    locale === "ar" ? "socials flex rtl-row" : "socials flex"
                  }
                  style={{ marginTop: "40px" }}
                >
                  <a
                    href="https://facebook.com"
                    target="_blanc"
                    rel="noreferrer noopener"
                  >
                    <img src="/images/socials/facebook.png" alt="Facebook" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blanc"
                    rel="noreferrer noopener"
                  >
                    <img src="/images/socials/linkedin.png" alt="Linkedin" />
                  </a>
                </div>
              </div>
              <div className="col50">
                <div
                  className={styles.contactInfo}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <h2>
                    <span className={styles.smHr} />
                    <span>{t("information_request")}</span>
                  </h2>
                  <form>
                    <input
                      className={styles.formInput}
                      type="text"
                      placeholder={t("modal_name")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <input
                      className={styles.formInput}
                      type="tel"
                      placeholder={t("modal_phone")}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <textarea
                      className={styles.formInput}
                      placeholder={t("modal_message")}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    <span id="feedback" className="feedback">
                      {"feedback"}
                    </span>
                  </form>
                  <div
                    className={
                      locale === "ar" ? "socials flex rtl-row" : "socials flex"
                    }
                  >
                    <button
                      className={styles.contactBtn}
                      onClick={(e) => sendEmail(e)}
                      type="submit"
                    >
                      {t("modal_send")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contacts-infos flex">
          <iframe
            title="ACA"
            src="https://maps.google.com/maps?q=Cabinet%20Mili%20Fraj%20de%20physioth%C3%A9rapie%20et%20r%C3%A9%C3%A9ducation%20fontionnelle&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
