import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseLoginModal } from "../../actions/UI";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

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

  const [login, setLogin] = useState(true);

  const { loginModalOpen } = useSelector((state) => state.ui);
  console.log(loginModalOpen);

  const closeModal = () => {
    //TODO: close modal
    dispatch(uiCloseLoginModal());
  };

  return (
    <div>
      <Modal
        isOpen={loginModalOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <RegisterForm setLogin={setLogin} />
        )}
      </Modal>
    </div>
  );
};
