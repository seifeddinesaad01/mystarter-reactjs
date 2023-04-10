import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

const ModalExample = ({ id, open, handleClose, data, ...rest }) => {
  return (
    <Dialog
      open={open}
      onClose={(e, reason) => {
        if (reason === "backdropClick" && reason !== "escapeKeyDown") {
          handleClose(id);
        }
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="ta-modal add-video-modal"
    >
      <DialogTitle id="alert-dialog-title">
        <span className="label">Modal</span>
        <span className="close-btn" onClick={() => handleClose(id)}>
          Fermer
        </span>
      </DialogTitle>
      <DialogContent className="ta-modal-content-scroll">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti
          nihil architecto ipsam placeat sapiente fugiat non optio. Possimus
          facere ut amet incidunt nesciunt, autem unde placeat vel consectetur!
          Possimus.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalExample;
