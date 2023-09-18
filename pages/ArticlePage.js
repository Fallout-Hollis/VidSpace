import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import VideoGrid from "../components/VideoGrid";
import Image from "next/image";

export default function ArticlePage() {
  return (
    <div>
      <Head>
        <title>VidSpace</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.png" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-black pb-1">
          <div className="bg-gray-800 rounded-xl pt-10 m-12 pb-10 border-2 border-red-600">
            <h2 className="mt-2 pb-4 text-6xl text-center text-orange-600">
              The Topic of Space Stuff
            </h2>
            <h1 className="text-4xl text-center text-orange-600 my-8">
              Exploring the Vast Universe
            </h1>
            <p className="text-center text-orange-600 text-xl">
              The universe, with its boundless expanse, has always fascinated
              humanity. From the twinkling stars in the night sky to the
              enigmatic black holes that lurk in the cosmic depths, space is a
              topic that never ceases to amaze us.
            </p>
            <Image
              src="/Images/thumbnail-11.png"
              width={800}
              height={800}
              className="md:w-1/4 p-4 m-auto "
              alt="Space Image"
            />

            <h1 className="text-4xl text-center text-orange-600 my-8">
              The Wonders of Our Solar System
            </h1>
            <p className="text-center text-orange-600 text-xl">
              Within our own cosmic neighborhood lies the mesmerizing solar
              system. From the scorching surface of Mercury to the icy plains of
              Pluto, each celestial body has its own unique characteristics and
              mysteries waiting to be unraveled.
            </p>
            <Image
              src="/Images/thumbnail-10.png"
              width={800}
              height={800}
              className="md:w-1/4 p-4 m-auto"
              alt="Space Image"
            />

            <h1 className="text-4xl text-center text-orange-600 my-8">
              The Quest for Extraterrestrial Life
            </h1>
            <p className="text-center text-orange-600 text-xl">
              One of the most intriguing questions in the realm of space
              exploration is the search for extraterrestrial life. Scientists
              are constantly scanning the cosmos for signs of life beyond Earth,
              with missions to Mars and distant exoplanets offering tantalizing
              clues.
            </p>
            <Image
              src="/Images/thumbnail-9.png"
              width={800}
              height={800}
              className="md:w-1/4 p-4 m-auto"
              alt="Space Image"
            />

            <h1 className="text-4xl text-center text-orange-600 my-8">
              Journeying to the Stars
            </h1>
            <p className="text-center text-orange-600 text-xl">
              Humanitys dreams of exploring the stars are becoming a reality.
              Space agencies and private companies are planning missions to
              distant stars and exoplanets, fueled by breakthroughs in
              propulsion technology and interstellar travel concepts.
            </p>
            <Image
              src="/Images/thumbnail-2.png"
              width={800}
              height={800}
              className="md:w-1/4 p-4 m-auto"
              alt="Space Image"
            />

            <h1 className="text-4xl text-center text-orange-600 my-8">
              The Future of Space Exploration
            </h1>
            <p className="text-center text-orange-600 text-xl">
              As we venture further into the cosmos, the possibilities seem
              endless. From colonizing other planets to harnessing the resources
              of asteroids, the future of space exploration promises to be an
              exciting journey of discovery and innovation.
            </p>
            <Image
              src="/Images/thumbnail-5.png"
              width={800}
              height={800}
              className="md:w-1/4 p-4 m-auto"
              alt="Space Image"
            />
          </div>
          <div className="bg-gray-800 rounded-xl pt-12 m-12 border-2 border-orange-600">
            <h1 className="mt-2 pb-4 text-5xl text-center text-orange-600">
              More Content
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
