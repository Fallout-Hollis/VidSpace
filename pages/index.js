import Head from "next/head";
import Navbar from "../components/NavBar";
import VideoGrid from "../components/VideoGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VidSpace</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.PNG" />
      </Head>

      <main className="pb-4">
        <Navbar />
        <VideoGrid />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
