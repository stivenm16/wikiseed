import Button from "../Button/Button";
import "./Modal.scss";

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  children?: JSX.Element;
  showModal: boolean;
}
function Modal({ children, onClose, onSubmit }: Props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {children}
        <Button label="Actualizar" disabled={false} onClick={onSubmit} />
      </div>
    </div>
  );
}

export default Modal;
