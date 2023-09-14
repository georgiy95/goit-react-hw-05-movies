import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const MovieCardImg = styled.img`
  height: 600px;
  width: 400px;
`;

export const MovieInfo = styled.div`
  padding-top: 20px;
  max-width: 1100px;
`;

export const MovieName = styled.h2`
  margin-bottom: 40px;
`;

export const MovieInfoText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const InfoWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

export const InfoHeader = styled.h3`
  font-size: 25px;
  font-weight: 500;
`;

export const List = styled.ul`

  margin-top: 20px;
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

export const ListItem = styled.li`
  list-style:none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  margin-right: 5px;
  padding: 5px 15px;
  border: none; 
  border-radius: 6px;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  text-decoration: none ;
  color: black;

  &:hover,
  &:focus {
    background-color:whitesmoke; 
    color: #0d57aa; 
    
  }
`;


