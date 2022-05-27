import { ButtonContainer } from "./Button.styles";

const Button = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}> {children}</ButtonContainer>;
};

export default Button;
