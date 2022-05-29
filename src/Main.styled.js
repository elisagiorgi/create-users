import styled from "styled-components";

export const Container = styled.div`
  background: #e8d6cf;
  padding: 50px 10px;
  text-align: center;
  padding-top: 150px;
`;

export const Title = styled.span`
  text-align: center;
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
  font-size: 90px;
`;

export const Sub = styled.span`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  font-family: "Advent Pro", sans-serif;
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
`;

export const SubText = styled.span`
  margin: 0 10px;
`;

export const Text = styled.span`
  font-family: "Advent Pro", sans-serif;
  font-size: 20px;
`;
