import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/UI";
import { LoginForm } from "./LoginForm";

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

export const LoginModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);
  console.log(modalOpen);

  const closeModal = () => {
    //TODO: close modal
    dispatch(uiCloseModal());
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};
