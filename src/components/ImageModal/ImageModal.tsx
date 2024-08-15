import React from "react";
import { UnsplashImage } from "../../fetchImages"; 

interface ImageModalProps {
  openCloseModal: () => void;
  modalImg: UnsplashImage | null; 
}

const ImageModal: React.FC<ImageModalProps> = ({ openCloseModal, modalImg }) => {
  if (!modalImg) return null;

  return (
    <div>
      <button onClick={openCloseModal}>Close</button>
      <img src={modalImg.urls.full} alt={modalImg.alt_description || "Image"} />
      {}
    </div>
  );
};

export default ImageModal;





