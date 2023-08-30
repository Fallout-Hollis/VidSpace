import React from 'react';
import VariableThumbnail from "../Images/Variable.png"
import ManagementThumbnail from "../Images/Management.jpg"
import CommentingThumbnail from "../Images/Comments.jpg"
import ActiveThumbnail from "../Images/Active.jpg"
import LearningThumbnail from "../Images/learning.jpg"
import GitHubThumbnail from "../Images/GitHub.jpg"
import HistoryThumbnail from "../Images/History.jpg"
import InfluencersThumbnail from "../Images/Influencers.jpg"
import ProjectsThumbnail from "../Images/PersonalProjects.jpg"


import Image from 'next/image';

// Dummy video data
const videos = [
  {
    id: 1,
    title: 'What is a variable?',
    thumbnailUrl: VariableThumbnail,
  },
  {
    id: 2,
    title: 'Tips and Tricks to Managing Your Time',
    thumbnailUrl: ManagementThumbnail,
  },
  {
    id: 3,
    title: 'Why commenting on your code is important',
    thumbnailUrl: CommentingThumbnail,
  },
  {
    id: 4,
    title: 'Why being active is actually good for your code',
    thumbnailUrl: ActiveThumbnail,
  },
  {
    id: 5,
    title: 'Finding your learning stlye',
    thumbnailUrl: LearningThumbnail,
  },
  {
    id: 6,
    title: 'Why it is important to use GitHub',
    thumbnailUrl: GitHubThumbnail,
  },
  {
    id: 7,
    title: 'A short history of web development',
    thumbnailUrl: HistoryThumbnail,
  },
  {
    id: 8,
    title: 'Good Programming influencers to checkout',
    thumbnailUrl: InfluencersThumbnail,
  },
  {
    id: 9,
    title: 'The importance of personal projects',
    thumbnailUrl: ProjectsThumbnail,
  },
];

const VideoRender: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video) => (
          <div key={video.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
              <Image src={video.thumbnailUrl} alt={video.title } width={500} height={200}/>
          <h3 className="text-xl text-center font-semibold">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoRender;