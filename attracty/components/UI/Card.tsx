import React from 'react';
import styled from 'styled-components/native';

interface ICardProps {
    children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => (
    <CardItem>{children}</CardItem>
);

const CardItem = styled.View`
    border: 2px solid #ccc;
    shadow-opacity: 0.55;
    shadow-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    elevation: 5;
    background-color: white;
`;

export default Card;
