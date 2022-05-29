import { useState } from "react";

import { GrLinkNext } from "react-icons/gr";
import { v4 as uuid } from "uuid";

//Components
import Card from "./components/Card/Card";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./modal-styling.css";
import Button from "./components/Button/Button";
import { Title, Sub, SubText, Container, Text } from "./Main.styled";

import DataEntry from "./components/DataEntry/DataEntry";

export const Main = () => {
  const [usersList, setUsersList] = useState([
    { id: uuid(), name: "Mario Rossi" },
    { id: uuid(), name: "Roberto Neri" },
    { id: uuid(), name: "Marina Antonini", friends: ["Mario Rossi"] },
  ]);

  const [userSelected, setUserSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalClose, setOpenModalClose] = useState(false);

  console.log("usersList", usersList);

  return (
    <>
      <Title>
        {"Users List"}
        <Sub>
          <SubText>{"View the list of users created or "} </SubText>
          <GrLinkNext />
          <Button
            onClick={() => {
              setUserSelected("");
              setOpenModal((prev) => !prev);
            }}
          >
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
            onClickEvent={() => {
              setUserSelected(user.id);
              setOpenModal((prev) => !prev);
            }}
          />
        ))}
      </Container>
      <Modal
        open={openModal}
        onClose={() => setOpenModalClose((prev) => !prev)}
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
        <DataEntry
          setUsersList={setUsersList}
          usersList={usersList}
          userSelected={userSelected}
          onClose={() => setOpenModal((prev) => !prev)}
          title={
            !userSelected
              ? "New user"
              : `Edit ${
                  usersList.filter((x) => x.id === userSelected)[0]?.name
                } `
          }
        />
      </Modal>
      <Modal
        open={openModalClose}
        onClose={() => setOpenModalClose((prev) => !prev)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <Text>Are you sure you want to exit ?</Text>
        <Button primary onClick={() => setOpenModalClose((prev) => !prev)}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            setOpenModalClose((prev) => !prev);
            setOpenModal((prev) => !prev);
          }}
        >
          Close
        </Button>
      </Modal>
    </>
  );
};
