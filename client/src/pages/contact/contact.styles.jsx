import styled from "styled-components";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  margin: 0 20%;
`;

export const ContactLabel = styled.h2`
  font-size: 3.5em;
  display: grid;
  justify-content: center;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
