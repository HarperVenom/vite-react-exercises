import { useState } from "react";
import Modal from "./modal";

const CustomModal = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="custom-modal-container">
      <button onClick={toggleShowModal}>Open Window</button>
      {showModal ? (
        <Modal
          id={"custom id"}
          header={<h1>Custom Header</h1>}
          body={<div>Custom Body</div>}
          footer={<div>Custom Footer</div>}
          onCLose={toggleShowModal}
        ></Modal>
      ) : null}
    </div>
  );
};

export default CustomModal;
