import { ButtonContainer } from "./Button.styles";

const Button = ({ children, onClick, primary }) => {
  return (
    <ButtonContainer onClick={onClick} primary={primary}>
      {" "}
      {children}
    </ButtonContainer>
  );
};

export default Button;
