import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2px;
  }
`;

export const CartItemImage = styled.img`
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 50%;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  @media screen and (max-width: 800px) {
    padding: 0vh 0.5vw;
    font-size: 0.8em;
    justify-content: unset;
  }
`;
