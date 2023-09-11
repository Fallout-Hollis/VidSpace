import Head from "next/head";
import Navbar from "../components/NavBar";
import IntroSection from "../components/IntroSection";
import VideoGrid from "../components/VideoGrid";
import DashBoard from "../components/DashBoard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VidSpace</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.PNG" />
      </Head>

      <main>
        <Navbar />
        <IntroSection />
        <div className="flex justify-between">
          <DashBoard />
          <VideoGrid />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
