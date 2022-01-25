import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "../styles/Header.module.css";
// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header(props) {
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = useState(false);
  const [showLangsList, setShowLangsList] = useState(false);
  const [showMobileMenu, setShowMobileMenue] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 40;
      setScrolled(scrollCheck);
    });
  });

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    document.addEventListener("scroll", () => {
      var currentScrollPos = window.pageYOffset;
      if (
        prevScrollpos > currentScrollPos ||
        document.documentElement.clientHeight ===
          document.documentElement.scrollHeight
      ) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-120px";
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  return (
    <header id="header" className={`${styles.header} ${styles.shadow}`}>
      <div className={styles.content}>
        <div className="container flex between">
          <div
            className={styles.logo}
            onClick={() => {
              setShowLangsList(false);
            }}
          >
            <Link href="/">
              <img src="images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="right-side flex">
            <nav className={styles.nav}>
              <ul className={locale === "ar" ? styles.navRtl : ""}>
                <li
                  onClick={() => {
                    setShowLangsList(false);
                  }}
                >
                  <Link href="/">
                    <a>{t("menu_home")}</a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShowLangsList(false);
                  }}
                >
                  <Link href="/Mili">
                    <a>{t("menu_mili")}</a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShowLangsList(false);
                  }}
                >
                  <Link href="/TreatedCases">
                    <a>{t("menu_cases_treated")}</a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShowLangsList(false);
                  }}
                >
                  <Link href="/Library">
                    <a>{t("library")}</a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShowLangsList(false);
                  }}
                >
                  <Link href="/News">
                    <a>{t("news")}</a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setShowLangsList(false);
                  }}
                >
                  <Link href="/Contact">
                    <a>{t("menu_contacts")}</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <MenuIcon
              className="mobile-menu-toggle"
              onClick={() => {
                setShowMobileMenue(true);
                setShowLangsList(false);
              }}
            />
            <div
              className="languages flex center"
              onClick={() => {
                setShowLangsList(!showLangsList);
              }}
            >
              <div className="selected-lang">
                <img
                  src={`/images/langs/${
                    locale === "fr" ? "fr" : locale === "ar" ? "ar" : "en"
                  }.png`}
                  alt="Lang"
                />
              </div>
              <KeyboardArrowDownIcon
                className={showLangsList ? "rotate" : ""}
              />
              <div
                className={
                  showLangsList ? "list-languages show" : "list-languages"
                }
              >
                <ul>
                  <li
                    onClick={() => {
                      setShowLangsList(false);
                    }}
                  >
                    <Link href={asPath} locale="fr">
                      <a className="flex">
                        <img src="/images/langs/fr.png" alt="Lang" />{" "}
                        <span>Français</span>
                      </a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setShowLangsList(false);
                    }}
                  >
                    <Link href={asPath} locale="en">
                      <a className="flex">
                        <img src="/images/langs/en.png" alt="Lang" />{" "}
                        <span>English</span>
                      </a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setShowLangsList(false);
                    }}
                  >
                    <Link href={asPath} locale="ar">
                      <a className="flex">
                        <img src="/images/langs/ar.png" alt="Lang" />{" "}
                        <span>عربي</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showMobileMenu ? "mobile-menu show" : "mobile-menu"}>
        <div className="flex end">
          <CloseIcon
            style={{ cursor: "pointer" }}
            className="close-menu"
            onClick={() => {
              setShowLangsList(false);
              setShowMobileMenue(false);
            }}
          />
        </div>
        <ul className={locale === "ar" ? "rtl-ul" : ""}>
          <Link href="/">
            <li
              onClick={() => {
                setShowLangsList(false);
                setShowMobileMenue(false);
              }}
            >
              <a>{t("menu_home")}</a>
            </li>
          </Link>
          <Link href="/Mili">
            <li
              onClick={() => {
                setShowLangsList(false);
                setShowMobileMenue(false);
              }}
            >
              <a>{t("menu_mili")}</a>
            </li>
          </Link>
          <Link href="/TreatedCases">
            <li
              onClick={() => {
                setShowLangsList(false);
                setShowMobileMenue(false);
              }}
            >
              <a>{t("menu_cases_treated")}</a>
            </li>
          </Link>
          <Link href="/Library">
            <li
              onClick={() => {
                setShowLangsList(false);
                setShowMobileMenue(false);
              }}
            >
              <a>{t("library")}</a>
            </li>
          </Link>
          <Link href="/News">
            <li
              onClick={() => {
                setShowLangsList(false);
                setShowMobileMenue(false);
              }}
            >
              <a>{t("news")}</a>
            </li>
          </Link>
          <Link href="/Contact">
            <li
              onClick={() => {
                setShowLangsList(false);
                setShowMobileMenue(false);
              }}
            >
              <a>{t("menu_contacts")}</a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
