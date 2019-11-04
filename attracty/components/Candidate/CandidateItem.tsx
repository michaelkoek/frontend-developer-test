import React, { useState } from 'react';
import { Dimensions, PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { ICandidateProps, CANDIDATE_CHOOSE } from '../../types/candidates';
import Card from '../UI/Card';

// interface ICardProps {
//     onSelect: (id: string, onSelect: CANDIDATE_CHOOSE) => void;
// }

const CandidateItem: React.FC<ICandidateProps> = ({ id, info, photos }) => {
    // const [panResponse, setPanResponse] = useState(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    const animatePosition = new Animated.ValueXY();

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            // console.log(gesture);
            // setPanResponse(gesture);
            animatePosition.setValue({
                x: gestureState.dx,
                y: gestureState.dy,
            });
        },
    });

    return (
        <Card>
            <Animated.View
                {...panResponder.panHandlers}
                style={[
                    { transform: animatePosition.getTranslateTransform() },
                    {
                        height: SCREEN_HEIGHT - 120,
                        width: SCREEN_WIDTH,
                        padding: 10,
                        position: 'absolute',
                    },
                ]}
            >
                <ImageContainer>
                    <ProfileImage
                        style={{
                            resizeMode: 'cover',
                        }}
                        source={{ uri: photos[0].url }}
                    />

                    <StyledLinearGradient
                        colors={['transparent', 'rgba(0,0,0,1)']}
                    />
                </ImageContainer>

                <InfoContainer>
                    <InfoHeader>
                        <Title>
                            {info.name}, {info.age}
                        </Title>
                        <Subtitle>
                            {info.sexuality} {info.gender}
                        </Subtitle>
                    </InfoHeader>
                </InfoContainer>
            </Animated.View>
        </Card>
    );
};

const Title = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Subtitle = styled.Text`
    font-size: 14px;
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

const InfoHeader = styled.View`
    width: 100%;
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
