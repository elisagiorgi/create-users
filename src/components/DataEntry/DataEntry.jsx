import { useState, useEffect } from "react";

import Button from "../Button/Button";
import {
  DataEntryStyle,
  InputStyle,
  ContainerFriends,
  ClickableFriend,
  Box,
  Title,
  Text,
} from "./DataEntry.style";
import { v4 as uuid } from "uuid";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../modal-styling.css";

const DataEntry = (props) => {
  const { usersList, setUsersList, onClose, userSelected, title } = props;
  const [inputValue, setInputValue] = useState("");
  const [inputFriendValue, setFriendValue] = useState("");

  const [friends, setFriends] = useState([]);
  const [openModal2, setOpenModal2] = useState(false);
  const [friendsSelectable, setFriendsSelectable] = useState([]);
  const userSelectedName = userSelected
    ? usersList.filter((x) => x.id === userSelected)[0]?.name
    : "";
  useEffect(() => {
    if (userSelected) {
      setInputValue(userSelectedName);
      const findUser = usersList.filter((e) => e.id === userSelected);

      if (findUser && findUser[0]?.friends) {
        setFriends(findUser[0]?.friends);
      }
    }
  }, [userSelected, usersList, userSelectedName]);

  console.log("friends", friends);

  useEffect(() => {
    const usersName = usersList.map((e) => e.name);
    const intersection = usersName.filter(
      (x) => !friends?.includes(x) && x !== userSelectedName
    );
    setFriendsSelectable(intersection);
  }, [friends, usersList, userSelectedName]);

  const checkIfUserExists = (name, addNewFriend) => {
    if (
      usersList.filter((e) => e.name?.toLowerCase() === name?.toLowerCase())
        .length > 0
    ) {
      if (userSelected && userSelectedName === name && !addNewFriend) {
        return false;
      }
      return true;
    }

    return false;
  };

  const addEditUser = () => {
    let el = [];
    let users = [...usersList];
    try {
      if (inputValue) {
        if (checkIfUserExists(inputValue)) {
          alert(
            "Sorry, an user with the same name already exists, choose another name."
          );
        } else if (
          inputFriendValue &&
          checkIfUserExists(inputFriendValue, true)
        ) {
          alert(
            "Sorry, an user with the same name already exists, choose another name for your friend."
          );
        } else {
          if (userSelected) {
            const userIndex = users.findIndex((x) => x.id === userSelected);
            if (inputFriendValue) {
              users[userIndex] = {
                ...users[userIndex],
                name: inputValue,
                friends: [...friends, inputFriendValue],
              };
            } else
              users[userIndex] = {
                ...users[userIndex],
                name: inputValue,
                friends: [...friends],
              };
          } else {
            if (inputFriendValue) {
              el.push({
                id: uuid(),
                name: inputValue,
                friends: [...friends, inputFriendValue],
              });
            } else {
              el.push({
                id: uuid(),
                name: inputValue,
                friends: [...friends],
              });
            }
          }
          if (inputFriendValue) {
            el.push({
              id: uuid(),
              name: inputFriendValue,
            });
          }

          setUsersList([...users, ...el]);
          setInputValue("");
          onClose();
        }
      } else {
        alert("Choose a name for a new user.");
      }
    } catch (err) {
      try {
        // retrying to add
        console.log("I'm trying a second time to add a new user");
        console.log("err", err);
      } catch (err) {
        alert("Sorry, something went wrong :( ");
      }
    }
  };
  const handleChange = (evt) => {
    setInputValue(evt);
  };
  const handleChangeFriend = (evt) => {
    setFriendValue(evt);
  };

  return (
    <Box>
      <Title> {title}</Title>
      <DataEntryStyle>
        <InputStyle
          placeholder="Write..."
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          // onPressEnter={(event) => inputChange(event.target.value)}
        />
        <Button onClick={() => addEditUser(inputValue)}>{"Save"}</Button>
      </DataEntryStyle>
      <Box>
        <Text>Friends:</Text>
        <ContainerFriends>
          <Button onClick={() => setOpenModal2(true)}>{"Select Friend"}</Button>
          <Text>{"or add a new friend"}</Text>
          <InputStyle
            placeholder="NewFriend"
            value={inputFriendValue}
            onChange={(e) => handleChangeFriend(e.target.value)}
          />
        </ContainerFriends>
        <ul>
          {friends?.map((user, index) => (
            <li key={"friends" + index}>
              <Text>{user}</Text>
              <Button
                primary
                onClick={() => {
                  const filteredArray = friends.filter((e) => e !== user);
                  setFriends(filteredArray);
                }}
              >
                {"Remove"}
              </Button>
            </li>
          ))}
        </ul>
      </Box>
      <Modal
        open={openModal2}
        onClose={() => setOpenModal2((prev) => !prev)}
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
        <ul>
          {friendsSelectable.length === 0 && (
            <Text>There are no more selectable friends, add a new friend.</Text>
          )}
          {friendsSelectable?.map((x, index) => (
            <ClickableFriend
              key={"clickable friend" + index}
              onClick={() => {
                setFriends([...friends, x]);
                setOpenModal2((prev) => !prev);
              }}
            >
              <Text>{x}</Text>
            </ClickableFriend>
          ))}
        </ul>
      </Modal>
    </Box>
  );
};

export default DataEntry;
