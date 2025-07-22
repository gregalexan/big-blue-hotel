// pages/_app.js

import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar"; // English Navbar
import NavbarGreek from "@/components/NavbarGreek"; // Greek Navbar
import Footer from "@/components/Footer"; // Footer
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Script from "next/script";
import NewWebsite from "@/components/NewWebsite"; // English New Website Component
import NewWebsiteGreek from "@/components/NewWebsiteGreek"; // Greek New Website Component

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
        <link rel="stylesheet" href="/assets/css/not-found.css" />
        
        <link rel="icon" href="/assets/images/images2/logo.JPG" />
      </Head>
      {/* Meta Pixel Script */}
      <Script
              id="facebook-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '614510061550767');
                  fbq('track', 'PageView');
                `,
              }}
            />
            
            {/* NoScript Fallback */}
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=614510061550767&ev=PageView&noscript=1"
              />
            </noscript>
      {/* Dynamic Navbar based on language */}
      {isGreek ? <NavbarGreek /> : <Navbar />}

      {isGreek ? <NewWebsiteGreek /> : <NewWebsite />}

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
