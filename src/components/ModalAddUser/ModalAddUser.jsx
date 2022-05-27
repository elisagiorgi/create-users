import { useState } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./modal-styling.css";
import Button from "../Button/Button";

const ModalAddUser = ({ open, close }) => {
  const [openModal, setOpenModal] = useState(open);
  console.log(open);
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal((prev) => !prev)}
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
      <Button onClick={() => setOpenModal((prev) => !prev)}>Add user2</Button>
      {"modal dentro modal"}
    </Modal>
  );
};

export default ModalAddUser;
