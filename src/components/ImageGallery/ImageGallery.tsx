import React from "react";
import { UnsplashImage } from "../../fetchImages"; 

interface ImageGalleryProps {
  images: UnsplashImage[]; 
  handleOpenModal: (id: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, handleOpenModal }) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id} onClick={() => handleOpenModal(image.id)}>
          <img src={image.urls.small} alt={image.alt_description || "Image"} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;






