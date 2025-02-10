// pages/_app.js

import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar"; // English Navbar
import NavbarGreek from "@/components/NavbarGreek"; // Greek Navbar
import Footer from "@/components/Footer"; // Footer
import LanguageSwitcher from "@/components/LanguageSwitcher";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isGreek = router.pathname.startsWith("/greek"); // Check if Greek page

  return (
    <>
      <Head>
        {/* Link to Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        
        {/* Your custom stylesheets */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/gallery.css" />
        
        <link rel="icon" href="/assets/images/images2/logo.JPG" />
      </Head>

      {/* Dynamic Navbar based on language */}
      {isGreek ? <NavbarGreek /> : <Navbar />}

      {/* Main content of each page */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Footer (same for all languages) */}
      <Footer />

      {/* Switch Languages */}
      <LanguageSwitcher />
    </>
  );
}

export default MyApp;
