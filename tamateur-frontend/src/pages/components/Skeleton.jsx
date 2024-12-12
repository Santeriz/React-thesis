import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Skeleton.css'; // Updated import for the renamed CSS

const CustomSkeleton = () => {
  return (
    <div className="skeleton-container">
      <Skeleton 
        baseColor="#202020" // Change base color
        highlightColor="#444" // Change highlight color
        borderRadius="10px" // Change border radius
      />
    </div>
  );
};

export default CustomSkeleton;
