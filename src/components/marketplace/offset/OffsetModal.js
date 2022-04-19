import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseOffsetModal } from "../../../actions/UI";
import { OffsetForm } from "./OffsetForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const OffsetModal = () => {
  const dispatch = useDispatch();

  const { offsetModalOpen } = useSelector((state) => state.ui);
  console.log("offsetModalOpen?: ", offsetModalOpen);

  const closeModal = () => {
    //TODO: close modal
    dispatch(uiCloseOffsetModal());
  };

  return (
    <div>
      <Modal
        isOpen={offsetModalOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <OffsetForm />
      </Modal>
    </div>
  );
};
