import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>VidSpace-About-Us</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.png" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-black p-8 rounded-lg shadow-md text-white text-center">
          <h1 className="text-4xl font-semibold mb-4 ">What is VidSpace?</h1>
          <div className="md:flex md:justify-between text-white m-auto md:w-1/2 bg-gray-800 rounded-lg mb-12 mt-12">
            <p className="text-2xl p-2 md:text-3xl md:w-1/2 m-auto">
              VidSpace is a leading video sharing platform where creators from
              all around the world can upload, share, and discover amazing video
              content.
            </p>
            <Image
              src="/Images/amzing-content.png"
              width={600}
              height={600}
              alt="Amazing Video Thumbnail"
              className="mt-2 md:mt-0 md:w-1/2 rounded-lg"
            />
          </div>
          <div className="md:flex md:justify-between text-white m-auto md:w-1/2 bg-gray-800 rounded-lg mb-12">
            <Image
              src="/Images/community.png"
              width={600}
              height={600}
              alt="Amazing Video Thumbnail"
              className="mt-2 md:mt-0 md:w-1/2 rounded-lg"
            />
            <p className="text-2xl p-2 md:text-3xl md:w-1/2 m-auto">
              Our mission is to connect people through video, providing a
              platform for creative expression, entertainment, and education.
            </p>
          </div>

          <div className="md:flex md:justify-between text-white m-auto md:w-1/2 bg-gray-800 rounded-lg mb-12">
            <p className="text-2xl p-2 md:text-3xl md:w-1/2 m-auto">
              Whether you&apos;re a content creator or a viewer, VidSpace has
              something for everyone. Join our community today and be a part of
              the video revolution!
            </p>
            <Image
              src="/Images/something-for-everyone.png"
              width={600}
              height={600}
              alt="Amazing Video Thumbnail"
              className="mt-2 md:mt-0 md:w-1/2 rounded-lg"
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
