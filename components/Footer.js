import styles from "../styles/Footer.module.css";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="" target="_blanc" rel="noreferrer noopener">
          <Image
            src="/images/socials/facebook.png"
            alt="Facebook"
            layout="responsive"
            width={10}
            height={10}
          />
        </a>
        <a href="" target="_blanc" rel="noreferrer noopener">
          <Image
            src="/images/socials/instagram.png"
            alt="Instagram"
            layout="responsive"
            width={10}
            height={10}
          />
        </a>
      </div>

      <div className="container flex between wrap">
        <div className="col3"></div>
        <div className="col3">
          <p>
            &copy; {new Date().getFullYear()} {t("footer_desc")}
          </p>
          <p>
            {t("created_by")}
            <br />
            <a
              href="https://anytime4anywhere.com"
              target="_blanc"
              rel="noreferrer noopener"
            >
              Anytime & Anywhere
            </a>
          </p>
        </div>
        <div className="col3"></div>
      </div>
    </footer>
  );
}

export default Footer;
