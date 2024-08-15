import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect } from "react";

export default function ImageModal({ openCloseModal, modalImg }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      background: "transparent",
    },
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        openCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openCloseModal]);

  Modal.setAppElement("#root");

  if (!modalImg || !modalImg.urls) {
    return null;
  }

  return (
    <Modal
      isOpen={true}
      overlayClassName={css.overlay}
      style={customStyles}
      onRequestClose={openCloseModal}
      shouldCloseOnOverlayClick={true}
    >
      <img src={modalImg.urls.regular} alt={modalImg.alt_description || "Image"} />
      <div className={css.wrap}>
      </div>
      <button
        onClick={openCloseModal}
        className={css.closeBtn}
        type="button"
      >
        <IoIosCloseCircleOutline size={40} />
      </button>
    </Modal>
  );
}


