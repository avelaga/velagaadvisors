import { useEffect } from "react";
import "@/styles/globals.css";
import Layout from '../components/layout';
import Lenis from 'lenis';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
