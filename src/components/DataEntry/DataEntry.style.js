import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;
export const DataEntryStyle = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContainerFriends = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputStyle = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  border: 1px solid black;
  border-radius: 3px;
`;

export const ClickableFriend = styled.div`
  cursor: pointer;
`;

export const Title = styled.span`
  font-family: "Advent Pro", sans-serif;
  font-size: 30px;
`;

export const Text = styled.span`
  font-family: "Advent Pro", sans-serif;
  font-size: 20px;
`;
