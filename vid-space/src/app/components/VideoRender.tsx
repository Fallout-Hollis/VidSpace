import React from 'react';
import ThumbnailPlaceHolder from "../Images/Thumbnail PlaceHolder.png"
import Image from 'next/image';

// Dummy video data
const videos = [
  {
    id: 1,
    title: 'What is a variable?',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 2,
    title: 'Tips and Tricks to Managing Your Time',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 3,
    title: 'Why commenting on your code is important',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 4,
    title: 'Why being active is actually good for your code',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 5,
    title: 'Finding your learning stlye',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 6,
    title: 'Why it is important to use GitHub',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 7,
    title: 'A short history of web development',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 8,
    title: 'Good Programming influencers to checkout',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
  {
    id: 9,
    title: 'The importance of personal projects',
    thumbnailUrl: ThumbnailPlaceHolder,
  },
];

const VideoRender: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video) => (
          <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image src={video.thumbnailUrl} alt={video.title } width={600} height={600}/>
          <h3 className="text-xl text-center font-semibold">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoRender;