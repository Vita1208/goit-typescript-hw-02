import Modal from "react-modal";
import { RemoveScroll } from "react-remove-scroll";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: "2",
  },
};
Modal.setAppElement("#root");
export default function ImageModal({ modalIsOpen, closeModal, src, url }) {
  return (
    <div>
      <RemoveScroll enabled={modalIsOpen}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <img src={src} alt={url} />
        </Modal>
      </RemoveScroll>
    </div>
  );
}
