import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import router from "next/router";
import { useEffect } from "react";
import * as gtag from "../libs/gtag";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
