import React, { useEffect } from "react";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Rewards from "@/components/Rewards";
import Services from "@/components/Services";
import SomePhotos from "@/components/SomePhotos";
import Rooms from "@/components/Rooms";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticProps() {
  const data = {
    title: "Big Blue Hotel | Home",
    description: "Big Blue Hotel is a luxurious hotel in Amaliapolis, offering a relaxing stay with fully equipped rooms.",
  };

  return {
    props: data,
  };
}

function Home({ title, description }) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const hash = router.asPath.split("#")[1]; // Get the hash value
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]); // Trigger effect when URL changes

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="language" content="en"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="Big Blue Hotel Amaliapolis, Amaliapolis Hotels, Hotels near Almyros, Hotel near Volos" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://bigbluehotel.net/images/bigbluepicfrompool.webp" />
        <meta property="og:url" content="https://bigbluehotel.net" />
        <meta property="og:type" content="website" />
        <Link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/images/images2/logo.JPG" />
        <Link rel="icon" sizes="192x192" href="https://bigbluehotel.net/images/images2/logo.JPG" />
      </Head>

      <div>
        <Hero />
        <AboutUs />
        <Rooms />
        <SomePhotos />
        <Services />
        <Rewards isGreek={false} />
        <Location isGreek={false} />
        <FAQ />
      </div>
    </>
  );
}

export default Home;
