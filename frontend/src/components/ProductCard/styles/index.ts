import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* border: 1px solid black; */
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  /* width: 300px;
  height: 300px; */
`;

export const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .smallText {
    font-size: 12px;
    font-weight: 600;
    max-width: 100px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border: none;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: none;
  outline: none;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
  }
`;
