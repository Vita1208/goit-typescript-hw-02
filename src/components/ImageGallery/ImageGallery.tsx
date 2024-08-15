import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, handleOpenModal }) {
  return (
    <ul className={css.list}>
      {images.map((data) => (
        <li onClick={() => handleOpenModal(data.id)} key={data.id}>
          <ImageCard data={data} />
        </li>
      ))}
    </ul>
  );
}

