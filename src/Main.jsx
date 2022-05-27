import { useState } from "react";

import { GrLinkNext } from "react-icons/gr";
import { v4 as uuid } from "uuid";

//Components
import Card from "./components/Card/Card";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./modal-styling.css";
import Button from "./components/Button/Button";
import { Title, Sub, SubText, Container, ModalText } from "./Main.styled";
import ModalAddUser from "./components/ModalAddUser/ModalAddUser";

export const Main = () => {
  const [usersList, setUsersList] = useState([
    { id: uuid(), name: "Mario Rossi" },
    { id: uuid(), name: "Roberto Neri" },
    { id: uuid(), name: "Marina Antonini", friends: ["Mario Rossi"] },
  ]);

  // const [openModal, setOpenModal] = useState({ id: uuid(), isOpen: false });
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [content, setContent] = useState("");

  const addUser = () => {
    try {
      // add
    } catch (err) {
      try {
        // retrying to add
        console.log("I'm trying a second time to add a new user");
      } catch (err) {
        alert("Sorry, something went wrong :( ");
      }
    }
  };

  return (
    <>
      <Title>
        {"Users List"}
        <Sub>
          <SubText>{"View the list of users created or "} </SubText>
          <GrLinkNext />
          <Button onClick={() => setOpenModal((prev) => !prev)}>
            Add user
          </Button>
        </Sub>
      </Title>

      <Container>
        {usersList?.map((user, index) => (
          <Card
            key={index}
            index={index}
            user={user}
            onClickEvent={() => setOpenModal((prev) => !prev)}
            setContent={setContent}
          />
        ))}
      </Container>
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
        <ModalText>{content}</ModalText>
        <Button onClick={() => setOpenModal2((prev) => !prev)}>Add user</Button>
        <ModalAddUser
          open={openModal2}
          // onClose={() => setOpenModal2((prev) => !prev)}
        />
      </Modal>
    </>
  );
};
