import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  /* background-color: #f5f5f5; */
  width: 99vw;
  gap: 5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const StyledButton = styled.button`
  width: 20%;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
