import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px auto;
  padding: 15px 10px;
  background: ${(props) => props.backgroundColor};
  font-family: "Advent Pro", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  max-width: 500px;
  min-height: 20px;
  font-size: 20px;
`;
