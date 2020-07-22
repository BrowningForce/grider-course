import '../assets/styles/VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img className='ui image' src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
      <div className='content'>
        <p className='header'>{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
