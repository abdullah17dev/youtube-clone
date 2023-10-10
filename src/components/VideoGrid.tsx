import React from 'react'
import VideoCard from './VideoCard'

const VIDEOS = [
  {
    image: 'photo.jpg',
    title: 'How to learn CODING in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '100k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn DANCING in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '200k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn BOXING in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '300k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '400k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '500k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '600k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '700k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '800k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '900k',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '1M',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '1.1M',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '1.2M',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '1.3M',
    timeStamp: '2 hours ago',
  },
  {
    image: 'photo.jpg',
    title: 'How to learn KARATE in 30 days | start coding immediately',
    author: 'Abdullah khan',
    views: '1.4M',
    timeStamp: '2 hours ago',
  },
]

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {VIDEOS.map((video) => (
        <div key={video.views}>
          <VideoCard
            image={video.image}
            title={video.title}
            author={video.author}
            views={video.views}
            timeStamp={video.timeStamp}
          />
        </div>
      ))}
    </div>
  )
}

export default VideoGrid
