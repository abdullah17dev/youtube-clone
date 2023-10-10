import React from 'react'

interface propsType {
  image: string
  title: string
  author: string
  views: string
  timeStamp: string
}

const VideoCard: React.FC<propsType> = (props) => {
  return (
    <div className="p-4 cursor-pointer">
      <img src={props.image} className={'rounded-xl'}></img>
      <div className="grid grid-cols-12 pt-2 pl-3">
        <div className="col-span-1">
          <img className={'rounded-2xl w-30 h-30'} src={props.image}></img>
        </div>
        <div className="col-span-11 pl-2">
          <div> {props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timeStamp}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
