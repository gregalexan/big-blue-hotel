import React, { useEffect } from "react";
import Location from "@/components/Location";
import Rewards from "@/components/Rewards";
import ServicesGreek from "@/components/ServicesGreek";
import SomePhotos from "@/components/SomePhotos";
import RoomsGreek from "@/components/RoomsGreek";
import AboutUsGreek from "@/components/AboutUsGreek";
import Head from "next/head";
import { useRouter } from "next/router";
import HeroGreek from "@/components/HeroGreek";
import FAQGreek from "@/components/FAQGreek";


export async function getServerSideProps() {
  const data = {
    title: "Big Blue Hotel | Κεντρική Σελίδα",
    description: "Το Ξενοδοχείο Big Blue είναι ένα πολυτελές ξενοδοχείο στην Αμαλιάπολη, ένα χωριό κοντά στον Αλμυρό και το Βόλο της Μαγνησίας, στην Ελλάδα. Το Big Blue Hotel προσφέρει μια χαλαρωτική διαμονή σε πλήρως εξοπλισμένα και άνετα δωμάτια.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="Big Blue Hotel Αμαλιάπολη, Αμαλιάπολη Ξενοδοχεία, Ξενοδοχείο κοντά στον Αλμυρό, Ξενοδοχείο κοντά στον Βόλο" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://bigbluehotel.net/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_1.jpg" />
        <meta property="og:url" content="https://bigbluehotel.net/greek" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
        <link rel="icon" sizes="192x192" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
      </Head>

      <div>
        <HeroGreek />
        <AboutUsGreek />
        <RoomsGreek />
        <SomePhotos />
        <ServicesGreek />
        <Rewards isGreek={true} />
        <Location isGreek={true} />
        <FAQGreek />
      </div>
    </>
  );
}

export default Home;
