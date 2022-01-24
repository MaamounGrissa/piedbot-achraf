import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AppWrapper } from "../Contexts/AppWrapper";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      delay: 100,
      duration: 1500,
    });
  }, []);

  return (
    <Layout>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
