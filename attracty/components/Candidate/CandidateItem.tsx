import React, { useState } from 'react';
import { Dimensions, PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { ICandidateProps, CANDIDATE_CHOOSE } from '../../types/candidates';
import Card from '../UI/Card';

interface ICardProps {
    isCurrentIndex: boolean;
}

const CandidateItem: React.FC<ICandidateProps & ICardProps> = ({
    info,
    photos,
    isCurrentIndex,
}) => {
    const SCREEN_HEIGHT: number = Dimensions.get('window').height;
    const SCREEN_WIDTH: number = Dimensions.get('window').width;

    const animatePosition: Animated.ValueXY = new Animated.ValueXY();

    const rotate = animatePosition.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
        extrapolate: 'clamp',
    });

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            animatePosition.setValue({
                x: gestureState.dx,
                y: gestureState.dy,
            });
        },
    });

    const rotateAndTranslate = () => ({
        transform: [
            {
                rotate: rotate,
            },
            ...animatePosition.getTranslateTransform(),
        ],
    });

    console.log({ animatePosition });
    console.log({ rotateAndTranslate });

    return (
        <Card>
            <Animated.View
                // {...panResponder.panHandlers}
                {...(isCurrentIndex && panResponder.panHandlers)}
                style={[
                    isCurrentIndex && rotateAndTranslate(),
                    {
                        height: SCREEN_HEIGHT - 150,
                        width: SCREEN_WIDTH,
                        padding: 10,
                        position: 'absolute',
                    },
                ]}
            >
                <ImageContainer>
                    <ProfileImage
                        resizeMode="cover"
                        source={{ uri: photos[0].url }}
                    />

                    <StyledLinearGradient
                        colors={['transparent', 'rgba(0,0,0,1)']}
                    />
                </ImageContainer>

                <InfoContainer>
                    <Title>
                        {info.name}, {info.age}
                    </Title>
                    <Subtitle>
                        {info.sexuality} {info.gender}
                    </Subtitle>
                </InfoContainer>
            </Animated.View>
        </Card>
    );
};

const Title = styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Subtitle = styled.Text`
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
`;

const InfoContainer = styled.View`
    padding: 10px 20px;
    position: absolute;
    bottom: 50px;
    width: 100%;
    left: 10px;
`;

const ImageContainer = styled.View`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ProfileImage = styled.Image`
    flex: 1;
`;

const StyledLinearGradient = styled(LinearGradient)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 150px;
`;

export default CandidateItem;
