import { useState } from "react";

import Button from "../Button/Button";
import {
  DataEntryStyle,
  InputStyle,
  ContainerFriends,
  Box,
} from "./DataEntry.style";
import { v4 as uuid } from "uuid";

const DataEntry = (props) => {
  const { usersList, setUsersList, onClose } = props;
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    if (e) {
      const el = { id: uuid(), name: inputValue };
      setUsersList([...usersList, el]);
      setInputValue("");
    }
  };

  const addUser = () => {
    try {
      const el = { id: uuid(), name: inputValue };
      setUsersList([...usersList, el]);
      setInputValue("");
      onClose();
    } catch (err) {
      try {
        // retrying to add
        console.log("I'm trying a second time to add a new user");
      } catch (err) {
        alert("Sorry, something went wrong :( ");
      }
    }
  };
  const handleChange = (evt) => {
    setInputValue(evt);
  };

  return (
    <Box>
      <DataEntryStyle>
        <InputStyle
          placeholder="Write..."
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          // onPressEnter={(event) => inputChange(event.target.value)}
        />
        <Button onClick={() => addUser(inputValue)}>{"Save"}</Button>
      </DataEntryStyle>
      <Box>
        Friends:
        <ContainerFriends>
          <Button>{"Select Friend"}</Button>
          <Button>{"New Friend"}</Button>
          {/* <ul>
        {usersList?.map((user, index) => (
          <li>{user.name}</li>
        ))}
      </ul> */}
        </ContainerFriends>
      </Box>
    </Box>
  );
};

export default DataEntry;
