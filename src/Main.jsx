import { useState } from "react";

import styled from "styled-components";
import { GrLinkNext } from "react-icons/gr";
import { v4 as uuid } from "uuid";

import { deviceQuery } from "./mediaQuery";

//Components
import Card from "./components/Card/Card";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./modal-styling.css";
import Button from "./components/Button/Button";

const Container = styled.div`
  background: #e8d6cf;
  padding: 50px 10px;
  text-align: center;

  @media ${deviceQuery.tablet} {
    padding-top: 100px;
  }

  @media ${deviceQuery.laptop} {
    padding-top: 150px;
  }

  @media ${deviceQuery.desktop} {
    padding-top: 160px;
  }
`;

const Title = styled.span`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: "Advent Pro", sans-serif;
  background: #e8d6cf;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 50;

  @media ${deviceQuery.tablet} {
    font-size: 60px;
  }

  @media ${deviceQuery.laptop} {
    font-size: 90px;
  }

  @media ${deviceQuery.desktop} {
    font-size: 100px;
  }
`;

const Sub = styled.span`
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    font-family: "Advent Pro", sans-serif;
    padding-bottom: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
  @media ${deviceQuery.tablet} {
    font-size: 20px;
  }
  @media ${deviceQuery.laptop} {
    font-size: 30px;
  }

  @media ${deviceQuery.desktop} {
    font-size: 40px;
  }
}
  `;

const SubText = styled.span`
    margin: 0 10px;
}
  `;

const ModalText = styled.span`
    font-family: "Advent Pro", sans-serif;
    font-size: 15px;
    @media ${deviceQuery.tablet} {
    font-size: 20px;
  }

  @media ${deviceQuery.laptop} {
    font-size: 40px;
  }

  @media ${deviceQuery.desktop} {
    font-size: 50px;
  }
}
  `;

export const Main = () => {
  const [usersList, setUsersList] = useState([
    { id: uuid(), name: "Mario Rossi" },
    { id: uuid(), name: "Roberto Neri" },
    { id: uuid(), name: "Marina Antonini", friends: ["Mario Rossi"] },
  ]);

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Title>
        {"Users List"}
        <Sub>
          <SubText>{"View the list of users created or "} </SubText>
          <GrLinkNext />
          <Button onClick={() => setOpen((prev) => !prev)}>Add user</Button>
        </Sub>
      </Title>

      <Container>
        {usersList?.map((user, index) => (
          <Card
            key={index}
            index={index}
            user={user}
            onClickEvent={onOpenModal}
            setContent={setContent}
          />
        ))}
      </Container>
      <Modal
        open={open}
        onClose={onCloseModal}
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
      </Modal>
    </>
  );
};
