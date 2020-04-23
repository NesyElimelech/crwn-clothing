import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  scroll-behavior: smooth;

  @media screen and (max-width: 800px) {
    width: 150px;
    height: 250px;
    top: 60px;
    right: 20px;
    padding: 5px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;

  @media screen and (max-width: 800px) {
    min-width: unset;
    padding: 0;
    margin: auto 10px;
    font-size: 13px;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 800px) {
    padding: 2px;
  }
`;
