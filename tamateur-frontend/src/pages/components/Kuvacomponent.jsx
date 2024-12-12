import { useState, useEffect, useCallback } from 'react';
import Kuvagalleria from '../Kuvagalleria'; // asd
import axios from 'axios';
import '../Kuvagalleria.css';

const Kuvacomponent = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchImages = async (page) => {
    try {
      const response = await axios.get('api stuff', {
        params: {
          method: 'flickr.photosets.getPhotos',
          api_key: import.meta.env.VITE_FLICKR_API_KEY, // env variable
          photoset_id: import.meta.env.VITE_FLICKR_PHOTOSET_ID, // env variable
          user_id: import.meta.env.VITE_FLICKR_USER_ID, // env variable
          format: 'json',
          nojsoncallback: 1,
          page: page,
        },
      });

      const photos = response.data.photoset.photo;
      const urls = photos.map(photo => {
        return `id`; // suuri kuva :)
      });

      setImageUrls(prevUrls => {
        const newUrls = urls.filter(url => !prevUrls.includes(url));
        return [...prevUrls, ...newUrls];
      });
      setLoading(false); // Set loading to false after images are fetched
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleScroll = useCallback(() => {
    if (document.documentElement.scrollHeight - window.innerHeight - window.scrollY < 100) {
      setLoading(true);
      setPage(prevPage => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // handleScroll is memoized and stable

  return (
    <Kuvagalleria imageUrls={imageUrls} setImageUrls={setImageUrls} loading={loading} />
  );
};

export default Kuvacomponent;
