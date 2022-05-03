import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseTokensModal } from "../../../actions/UI";
import { LandTokens } from "./LandTokens";

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

export const TokensModal = () => {
  const dispatch = useDispatch();

  const { tokensModalOpen } = useSelector((state) => state.ui);
  console.log("tokensModalOpen?: ", tokensModalOpen);

  const closeModal = () => {
    //TODO: close modal
    dispatch(uiCloseTokensModal());
  };

  return (
    <div>
      <Modal
        isOpen={tokensModalOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal modal-tokens"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <LandTokens />
      </Modal>
    </div>
  );
};
