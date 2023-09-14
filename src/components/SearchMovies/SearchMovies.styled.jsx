import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  margin-right: 15px;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 15px 35px; 
  border: none;
  border-radius: 5px; 
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