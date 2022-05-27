import styled from "styled-components";

import { deviceQuery } from "./mediaQuery";

export const Container = styled.div`
  background: #e8d6cf;
  padding: 50px 10px;
  text-align: center;

  @media ${deviceQuery.tablet} {
    padding-top: 100px;
  }

  @media ${deviceQuery.laptop} {
    padding-top: 150px;
  }

  @media ${deviceQuery.desktop} {
    padding-top: 160px;
  }
`;

export const Title = styled.span`
  text-align: center;
  font-size: 40px;
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

  @media ${deviceQuery.tablet} {
    font-size: 60px;
  }

  @media ${deviceQuery.laptop} {
    font-size: 90px;
  }

  @media ${deviceQuery.desktop} {
    font-size: 100px;
  }
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
  @media ${deviceQuery.tablet} {
    font-size: 20px;
  }
  @media ${deviceQuery.laptop} {
    font-size: 30px;
  }

  @media ${deviceQuery.desktop} {
    font-size: 40px;
  }
}
  `;

export const SubText = styled.span`
    margin: 0 10px;
}
  `;

export const ModalText = styled.span`
    font-family: "Advent Pro", sans-serif;
    font-size: 15px;
    @media ${deviceQuery.tablet} {
    font-size: 20px;
  }

  @media ${deviceQuery.laptop} {
    font-size: 40px;
  }

  @media ${deviceQuery.desktop} {
    font-size: 50px;
  }
}
  `;
