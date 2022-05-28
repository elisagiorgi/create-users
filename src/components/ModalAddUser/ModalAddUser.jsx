import { useState, useEffect } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./modal-styling.css";
import Button from "../Button/Button";

const ModalAddUser = ({ open, onClose }) => {
  const [openModal, setOpenModal] = useState(open);

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <Modal
      open={openModal}
      onClose={onClose}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
      }}
    >
      {/* <Button onClick={() => setOpenModal((prev) => !prev)}>Add user2</Button> */}
    </Modal>
  );
};

export default ModalAddUser;
