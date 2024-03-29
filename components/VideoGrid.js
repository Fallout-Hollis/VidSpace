import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const galleryData = [
  {
    title: "Exploring the topic of space earthquakes",
    url: "/Images/thumbnail-5.png",
    likeCount: 10,
    viewCount: 1000,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "Why people love science fiction",
    url: "/Images/thumbnail-1.png",
    likeCount: 15,
    viewCount: 1500,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "How to stay motivated",
    url: "/Images/thumbnail-2.png",
    likeCount: 5,
    viewCount: 500,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "Why cats are cute",
    url: "/Images/thumbnail-3.png",
    likeCount: 20,
    viewCount: 2000,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "Farming Pumpkins",
    url: "/Images/thumbnail-4.png",
    likeCount: 8,
    viewCount: 800,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "Why dystopias captivate audiences ",
    url: "/Images/thumbnail-6.png",
    likeCount: 12,
    viewCount: 1800,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "Medieval practices",
    url: "/Images/thumbnail-7.png",
    likeCount: 8,
    viewCount: 800,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "Could power armor work?",
    url: "/Images/thumbnail-8.png",
    likeCount: 12,
    viewCount: 1800,
    ContentType: "video",
    link: "VideoPage",
  },
  {
    title: "How Astronauts do space walks",
    url: "/Images/thumbnail-9.png",
    likeCount: 23,
    viewCount: 456,
    ContentType: "article",
    link: "ArticlePage",
  },
  {
    title: "Why our galaxy is amazing",
    url: "/Images/thumbnail-10.png",
    likeCount: 65,
    viewCount: 2345,
    ContentType: "article",
    link: "ArticlePage",
  },
  {
    title: "Being humbled by cosmic perspective",
    url: "/Images/thumbnail-11.png",
    likeCount: 234,
    viewCount: 6544,
    ContentType: "article",
    link: "ArticlePage",
  },
];

const VideoGrid = () => {
  const [ContentType, setContentType] = useState("video");

  function chooseContent(type) {
    setContentType(type);
  }

  let filteredData = galleryData.filter(
    (item) => item.ContentType == ContentType
  );

  return (
    <div className="bg-gray-800 rounded-lg m-6 ">
      <div className="flex justify-center items-center gap-4 p-4 pb-0 text-xl">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          onClick={() => {
            chooseContent("video");
          }}
        >
          Videos
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          onClick={() => {
            chooseContent("article");
          }}
        >
          Articles
        </button>
      </div>
      <div className="flex flex-wrap justify-center bg-gray-800 rounded-lg m-6 ">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="m-4 p-4 border border-orange-200 rounded-lg text-center md:w-80 transition-transform transform hover:scale-110 hover:shadow-lg"
          >
            <Link href={item.link}>
              <Image src={item.url} width={800} height={800} alt={item.title} />
              <h2 className="mt-2 text-3xl text-orange-600">{item.title}</h2>
              <div className="flex justify-between text-orange-800 mt-2 text-xl">
                <p className="mx-2">Likes: {item.likeCount}</p>
                <p>Views: {item.viewCount}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
