import Head from "next/head";
import Navbar from "../components/NavBar";
import IntroSection from "../components/IntroSection";
import VideoGrid from "../components/VideoGrid";
import DashBoard from "../components/DashBoard";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Head>
        <title>VidSpace-About-Us</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.PNG" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-black p-8 rounded-lg shadow-md text-white text-center">
          <h1 className="text-4xl font-semibold mb-4 ">What is VidSpace?</h1>
          <div className="flex justify-between text-white m-auto w-1/2 bg-gray-800 rounded-lg mb-12 mt-12">
            <p className="text-3xl w-1/2 m-auto">
              VidSpace is a leading video sharing platform where creators from
              all around the world can upload, share, and discover amazing video
              content.
            </p>
            <img
              src="Images/amzing-content.png"
              alt="Amazing Video Thumbnail"
              className="w-1/2 rounded-lg"
            />
          </div>
          <div className="flex justify-between text-white m-auto w-1/2 bg-gray-800 rounded-lg mb-12">
            <p className="text-3xl w-1/2 m-auto">
              Our mission is to connect people through video, providing a
              platform for creative expression, entertainment, and education.
            </p>
            <img
              src="Images/community.png"
              alt="Amazing Video Thumbnail"
              className="w-1/2 rounded-lg"
            />
          </div>

          <div className="flex justify-between text-white m-auto w-1/2 bg-gray-800 rounded-lg mb-12">
            <p className="text-3xl w-1/2 m-auto">
              Whether you're a content creator or a viewer, VidSpace has
              something for everyone. Join our community today and be a part of
              the video revolution!
            </p>
            <img
              src="Images/something-for-everyone.png"
              alt="Amazing Video Thumbnail"
              className="w-1/2 rounded-lg"
            />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
