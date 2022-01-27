import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AppWrapper } from "../Contexts/AppWrapper";
import * as ga from "../components/lib/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
