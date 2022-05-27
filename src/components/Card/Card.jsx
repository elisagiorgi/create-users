import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Counter from "../Counter/Counter";

import { Container } from "./Card.styles";

const Card = ({ index, user, onClickEvent, setContent }) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Container
      backgroundColor={index % 2 === 0 ? palette[0] : palette[1]}
      onClick={() => {
        onClickEvent();
        setContent(user.name);
      }}
    >
      <Counter number={index + 1} /> {user.name}
    </Container>
  );
};

export default Card;
