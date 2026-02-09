import { useEffect } from "react";
import "@/styles/globals.css";
import Layout from '../components/layout';


export default function App({ Component, pageProps }) {

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
      <Component {...pageProps} />
    </Layout>
  )
}
