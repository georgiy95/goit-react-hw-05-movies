import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 12px 24px; 
  border: none;
  border-radius: 30px; 
  background-color: whitesmoke; 
  color: black; 
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #1c85ff; 
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 4px rgba(13, 87, 170, 0.5); 
  }

  &:active {
    background-color: #0b4e8a; 
  }
`;
