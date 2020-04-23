import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 25px;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  & > div {
    margin-bottom: 30px;
    @media screen and (max-width: 800px) {
      margin-bottom: 10px;
    }
  }
`;
