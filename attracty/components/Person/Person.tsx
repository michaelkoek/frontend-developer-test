import React, { useState } from 'react';
import {
    View,
    Text,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    Dimensions,
    Animated,
} from 'react-native';
import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { ICandidateProps } from '../../types/candidates';
import Card from '../UI/Card';
import CardImage from '../UI/CardImage';
import CardDetails from '../UI/CardDetails';

interface IPerson {
    onSwipeFromLeft: () => void;
    onSwipeFromRight: () => void;
}

const Person: React.FC<ICandidateProps & IPerson> = ({
    info,
    photos,
    onSwipeFromLeft,
    onSwipeFromRight,
}) => {
    const LeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <LeftAction>
                <ActionText
                    as={Animated.Text}
                    style={{ transform: [{ scale }] }}
                >
                    Liked
                </ActionText>
            </LeftAction>
        );
    };

    const RightActions = ({ progress, dragX, onPress }) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={onPress}>
                <RightAction>
                    <ActionText
                        as={Animated.Text}
                        style={{ transform: [{ scale }] }}
                    >
                        DisLike
                    </ActionText>
                </RightAction>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            renderLeftActions={LeftActions}
            onSwipeableLeftOpen={onSwipeFromLeft}
            renderRightActions={(progress, dragX) => (
                <RightActions
                    progress={progress}
                    dragX={dragX}
                    onPress={onSwipeFromRight}
                />
            )}
        >
            <Card>
                <CardImage photos={photos} />
                <CardDetails info={info} />
            </Card>
        </Swipeable>
    );
};

const LeftAction = styled.View`
    background-color: green;
    justify-content: center;
    flex: 1;
`;

const RightAction = styled.View`
    background-color: red;
    justify-content: center;
    flex: 1;
`;
const ActionText = styled.Text`
    color: white;
    font-weight: bold;
    padding: 20px;
`;

export default Person;
