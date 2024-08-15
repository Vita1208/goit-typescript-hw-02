import React from "react";

interface ImageUrls {
  small: string;
  regular?: string;
}

interface Image {
  id: string;
  urls: ImageUrls;
  alt_description?: string;
}

interface ImageCardProps {
  data: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ data }) => {
  return (
    <div>
      <img src={data.urls.small} alt={data.alt_description || 'Image'} />
    </div>
  );
};

export default ImageCard;



