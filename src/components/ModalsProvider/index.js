import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../data/slices/modals";
import { ModalExample } from "../Modals";

const ModalsProvider = (props) => {
  const { modals } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const modalState = (id, key) => {
    const res = modals.find((modal) => modal.id === id);
    return res[key];
  };
  const handleClose = (id) => {
    dispatch(closeModal(id));
  };
  return (
    <>
      <ModalExample
        id="modal-example"
        open={modalState("modal-example", "open")}
        data={modalState("modal-example", "data")}
        handleClose={handleClose}
      />
    </>
  );
};

export default ModalsProvider;
