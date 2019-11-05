import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const CardFeedbackButton = ({ action }) => {
    return (
        <AnimatedView
            as={Animated.View}
            style={{
                opacity: action,
                transform: [{ rotate: '-30deg' }],
            }}
        >
            <ButtonText>LIKE</ButtonText>
        </AnimatedView>
    );
};

const AnimatedView = styled.View`
    position: absolute;
    top: 50;
    left: 40;
    z-index: 1;
`;

const ButtonText = styled.Text`
    padding: 10px;
    font-weight: 800;
    color: green;
    border: 1px solid green;
`;

export default CardFeedbackButton;
