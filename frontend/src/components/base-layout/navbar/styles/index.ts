import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100%;
  height: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  div {
    display: flex;
    gap: 1rem;
  }
`;

const StyledSearchInput = styled.input`
  width: 22rem;
  height: 0.7rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 17px;
  outline: none;
  border: none;
`;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export { StyledNavBar, StyledSearchInput, StyledSearchBar };
