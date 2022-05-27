import styled from "styled-components";

import { deviceQuery } from "../../mediaQuery";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 300px;
  margin: 20px auto;
  padding: 15px 10px;
  background: ${(props) => props.backgroundColor};
  font-family: "Advent Pro", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 25px;
  min-height: 90px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;

  @media ${deviceQuery.tablet} {
    max-width: 700px;
  }

  @media ${deviceQuery.laptop} {
    max-width: 500px;
    min-height: 20px;
    font-size: 20px;
  }

  @media ${deviceQuery.desktop} {
    max-width: 1200px;
    min-height: 130px;
    font-size: 30px;
  }
`;
