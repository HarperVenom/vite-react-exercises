import "./modal.css";

const Modal = ({ id, header, body, footer, onCLose }) => {
  return (
    <div id={id ? id : "Modal"} className="modal-container">
      <button className="close-button" onClick={onCLose}>
        x
      </button>
      <div className="modal-header">{header ? header : "Modal Header"}</div>
      <div className="modal-body">{body ? body : "Modal Body"}</div>
      <div className="modal-footer">{footer ? footer : "Modal Footer"}</div>
    </div>
  );
};

export default Modal;
