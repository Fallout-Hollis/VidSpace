import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    <div>
      <Head>
        <title>Login VidSpace</title>
        <meta name="A website for sharing videos" content="VidSpace" />
        <link rel="icon" type="image/png" href="VidSpace_Logo.png" />
      </Head>

      <main>
        <Navbar />
        <div className="md:flex md:justify-between text-white m-auto p-12 rounded-lg md:pb-36">
          <Image
            src="/Images/LoggingIn.png"
            width={1000}
            height={1000}
            priority={true}
            alt="Amazing Video Thumbnail"
            className=" w-1/2 mt-4 md:mt-0  md:w-1/3 rounded-lg m-auto"
          />
          <div className=" w-1/2 max-w-md mx-auto self-center">
            <h2 className="text-center text-6xl mt-6 mb-6 text-orange-600 md:bg-gray-800 md:p-4 rounded-xl">
              Login
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-800 p-6 rounded-xl"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-orange-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-orange-600 mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-800 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="color"
                  className="block text-sm font-medium text-orange-600"
                >
                  Favorite Color
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="text-orange-600 mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
