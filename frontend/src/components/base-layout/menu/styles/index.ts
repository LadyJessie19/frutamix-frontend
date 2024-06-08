import styled from "styled-components";

interface StyledMenuProps {
  open: boolean;
}

const StyledMenu = styled.div<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: ${({ open }) => (open ? "15em" : "5em")};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  transition: left 0.3s ease-in-out;
`;

const Burger = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 10;
`;

const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  text-decoration: none;
  margin: 16px 0;
  transition: color 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
export { StyledMenu, MenuItem, Burger };
