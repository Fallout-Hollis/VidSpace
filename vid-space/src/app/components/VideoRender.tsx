'use client'
import { useState } from 'react';

interface Video {
  title: string;
  image: string;
    description: string;
    link: string;
    iframe: any;
}

//array for videos
const allVideos: Video[] = [ 
    {
        title: '1',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    }, 
    {
        title: '2',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '3',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link:"https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '4',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '5',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '6',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '7',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '8',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link:  "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '9',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
    {
        title: '99',
        image: "",
        description: "In todays short video essay I discuss why the Minecraft civilization videos have become so popular.",
        link: "https://www.youtube.com/watch?v=Dy1lN7DkSPw",
        iframe: <iframe width="1903" height="760" src="https://www.youtube.com/embed/Dy1lN7DkSPw" title="Why Minecraft Civilization Videos are Captivating Audiences" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },  
];

const getRandomVideos = (videos: Video[], count: number): Video[] => {
  const shuffled = videos.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const VideoRender: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(getRandomVideos(allVideos, 10));

  const handleRefresh = () => {
    setVideos(getRandomVideos(allVideos, 10));
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <a key={index} href={video.link} target="_blank" rel="noopener noreferrer">
            <div
              className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                    <h2 className="mb-2 text-xl font-semibold">{video.title}</h2>
                    
              <img src={video.image} alt={video.title} className="w-full h-36 object-cover rounded" />
              <p className="mt-2 text-sm opacity-70">{video.description}</p>
            </div>
          </a>
        ))}
      </div>
      <button
        onClick={handleRefresh}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
      >
        Refresh
      </button>
    </main>
  );
};

export default VideoRender;