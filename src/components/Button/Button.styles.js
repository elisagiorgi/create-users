import styled from "styled-components";

export const ButtonContainer = styled.button`
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
