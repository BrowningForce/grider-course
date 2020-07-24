import { useState, useEffect } from 'react';
import youtube from '../api/YouTube';

const useVideos = (defaultQuery) => {
  const KEY = (() => 'AIzaSyCs8aHXgLRSVHLtHetPAdI1EJwMb4IeYmU')();
  const [videos, setVideos] = useState([]);
  const search = async (term) => {
    try {
      const videoList = await youtube.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          key: KEY,
          q: term,
        },
      });

      setVideos(videoList.data.items);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    search(defaultQuery);
  }, [defaultQuery]);


  return { videos, search };
};

export default useVideos;
