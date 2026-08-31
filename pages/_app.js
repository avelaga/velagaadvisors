import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Layout from '../components/layout';
import { absoluteUrl } from "@/data/site";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // One canonical URL per page, on the www host the apex redirects to. Declared
  // here so every page gets one without repeating it in each Head block.
  const canonicalPath = router.asPath.split(/[?#]/)[0];
  const canonical = absoluteUrl(canonicalPath === "/" ? "/" : canonicalPath.replace(/\/$/, ""));

  useEffect(() => {
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });
  }, []);
  return (
    <Layout>
      <Head>
        <link rel="canonical" href={canonical} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
