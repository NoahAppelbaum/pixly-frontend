import "./stylesheets/Homepage.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function ImageCard({ image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="ImageCard">
      {!isLoaded && <p>Image Loading from S3...</p>}
      <div className="ImageCard-info">
        <h4>{image.name}{!!image.exifData.artist && `, by ${image.exifData.artist}`}</h4>
      </div>
      <Link to={`/images/${image.id}`}>GO TO DETAILS</Link>
        <img onLoad={() => setIsLoaded(true)} alt={image.name} src={image.presignedUrl} />
    </div>
  );
}


export default ImageCard;
