import React from 'react';
import styled from 'styled-components/native';

interface ICardProps {
    children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => (
    <CardItem>{children}</CardItem>
);

const CardItem = styled.View`
    shadow-opacity: 0.55;
    shadow-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    elevation: 5;
    margin: 20px;
    background-color: #eaedf4;
    border-radius: 10px;
    padding: 15px;
`;

export default Card;
