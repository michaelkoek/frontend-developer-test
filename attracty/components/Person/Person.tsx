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
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

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
    const SCREEN_HEIGHT: number = Dimensions.get('window').height;
    const SCREEN_WIDTH: number = Dimensions.get('window').width;

    const LeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp',
        });
        return (
            <LeftAction>
                <ActionText
                    as={Animated.Text}
                    style={{ transform: [{ scale }] }}
                >
                    <Ionicons name="ios-heart" size={80} color="#D74432" />
                </ActionText>
            </LeftAction>
        );
    };

    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp',
        });
        return (
            <RightAction>
                <ActionText
                    as={Animated.Text}
                    style={{ transform: [{ scale }] }}
                >
                    <MaterialIcons
                        name="not-interested"
                        size={80}
                        color="white"
                    />
                </ActionText>
            </RightAction>
        );
    };

    return (
        <Swipeable
            renderLeftActions={LeftActions}
            onSwipeableLeftOpen={onSwipeFromLeft}
            renderRightActions={RightActions}
            onSwipeableRightOpen={onSwipeFromRight}
        >
            <Card>
                <CardImage photos={photos} />
                <CardDetails info={info} />
            </Card>
        </Swipeable>
    );
};

const LeftAction = styled.View`
    justify-content: center;
    flex: 1;
    background-color: #e0917a;
    align-items: flex-start;
`;

const RightAction = styled.View`
    background-color: #d744318c;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
`;
const ActionText = styled.Text`
    color: white;
    font-weight: bold;
    padding: 20px;
    align-items: center;
`;

export default Person;
