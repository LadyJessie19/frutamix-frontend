import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  /* background-color: #f5f5f5; */
  width: 85%;
`;

const HeaderSection = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 80%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const ButtonHeader = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ProductsDisplay = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export { StyledSection, HeaderSection, ProductsDisplay, ButtonHeader };
