import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (deaultSearchTearm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search('nirvana');
  }, []);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
