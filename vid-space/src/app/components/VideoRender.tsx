import React from 'react';
import MainImg from "../Images/mcc.png"
import Image from 'next/image';

// Dummy video data
const videos = [
  {
    id: 1,
    title: 'Cool Video 1',
    thumbnailUrl: MainImg,
  },
  {
    id: 2,
    title: 'Awesome Video 2',
    thumbnailUrl: MainImg,
  },
];

const VideoRender: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video) => (
          <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image src={video.thumbnailUrl} alt={video.title } width={600} height={600}/>
          <h3 className="text-lg font-semibold">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoRender;