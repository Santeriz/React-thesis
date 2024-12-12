import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Kuvagalleria.css';
import CustomSkeleton from './components/Skeleton';

const Kuvagalleria = ({ imageUrls, loading }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
  }, [imageUrls]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="kuvagalleria-container">
      <h1 className="gallery-title">Kuvia tapahtumista</h1>
      <div className="gallery">
        {loading ? (
          // Show skeletons while loading
          Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className="gallery-item">
              <CustomSkeleton />
            </div>
          ))
        ) : (
          // Show images after loading
          imageUrls.map((url, index) => (
            <div key={index} className="gallery-item">
              <img
                src={url}
                alt={`Gallery item ${index + 1}`}
                onClick={() => openLightbox(index)}
                className="gallery-img"
              />
            </div>
          ))
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={closeLightbox}
          index={currentIndex}
          slides={imageUrls.map((url) => ({ src: url }))}
          // lightbox scale
          styles={{
            container: {
              maxWidth: '100%',
              maxHeight: '100%',
            },
            image: {
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
            },
          }}
        />
      )}
    </div>
  );
};

Kuvagalleria.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Kuvagalleria;