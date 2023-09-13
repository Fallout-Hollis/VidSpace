import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <div>
      <Head>
        <title>VidSpace-Shop</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.PNG" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-black p-8 rounded-lg shadow-md text-white text-center">
          <h1 className="text-6xl font-semibold text-orange-400">
            Want to get some VidSpace Merch?
          </h1>
          <div className="m-4 p-4 border border-orange-600 rounded-lg text-center md:w-1/2 m-auto mt-6">
            <Link href="/">
              <img
                src="Images/Store.png"
                alt="Shop image"
                className="self-center m-auto"
              />
              <h2 className="mt-2 text-6xl text-black bg-orange-400 rounded-xl pb-4">
                Click here to go to our merch website!
              </h2>
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
