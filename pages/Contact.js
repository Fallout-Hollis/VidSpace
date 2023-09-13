import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact VidSpace</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.png" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-black p-8 rounded-lg shadow-md text-white text-center">
          <h1 className="text-6xl font-semibold text-orange-400">
            Did you enjoy my website?
          </h1>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
