import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import VideoGrid from "../components/VideoGrid";

export default function VideoPage() {
  return (
    <div>
      <Head>
        <title>VidSpace-About-Us</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.PNG" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-black pb-1">
          <div className="bg-gray-800 rounded-xl pt-10 m-12 pb-10 border-2 border-red-600">
            <h2 className="mt-2 pb-4 text-4xl text-center text-orange-600">
              Doggo
            </h2>
            <video
              className="self-center m-auto border-8 border-black"
              width="1280"
              height="720"
              controls
              controlsList="nodownload "
            >
              <source src="Videos/TestVid.mp4 " />
              Your browser does not support video player.
            </video>
          </div>
          <div className="bg-gray-800 rounded-xl pt-12 m-12 border-2 border-orange-600">
            <h1 className="mt-2 pb-4 text-5xl text-center text-orange-600">
              More Videos
            </h1>
            <VideoGrid />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
