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
import DataEntry from "./components/DataEntry/DataEntry";

export const Main = () => {
  const [usersList, setUsersList] = useState([
    { id: uuid(), name: "Mario Rossi" },
    { id: uuid(), name: "Roberto Neri" },
    { id: uuid(), name: "Marina Antonini", friends: ["Mario Rossi"] },
  ]);

  const [selectedUser, setSeletedUser] = useState();

  // const [openModal, setOpenModal] = useState({ id: uuid(), isOpen: false });
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [content, setContent] = useState("");

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
            // onClickEvent={() => setOpenModal((prev) => !prev)}
            // setContent={setContent}
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
        {/* <ModalText>{content}</ModalText> */}
        {/* <Button onClick={() => setOpenModal2((prev) => !prev)}> ciao</Button> */}
        <DataEntry
          setUsersList={setUsersList}
          usersList={usersList}
          onClose={() => setOpenModal((prev) => !prev)}
        />
      </Modal>
      <ModalAddUser
        open={openModal2}
        onClose={() => setOpenModal2((prev) => !prev)}
      />
    </>
  );
};
