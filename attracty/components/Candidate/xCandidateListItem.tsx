import React, { useState } from 'react';
import {
    View,
    Text,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

import { ICandidateProps } from '../../types/candidates';
import Card from '../UI/Card';

const candidateListItem: React.FC<ICandidateProps> = ({ info, photos }) => {
    const [moreInfo, setMoreInfo] = useState<boolean>(false);

    const TouchablePlatform =
        Platform.OS === 'android' && Platform.Version >= 21
            ? TouchableNativeFeedback
            : TouchableOpacity;

    console.log(photos);

    return (
        <TouchableArea>
            <TouchablePlatform onPress={() => {}}>
                <View>
                    <ImageContainer>
                        <ProfileImage
                            resizeMode="cover"
                            source={{ uri: photos[0].url }}
                        />
                    </ImageContainer>

                    <InformationContainer>
                        <TotalInformation>
                            <MainInfo>
                                <MainText>
                                    {info.name}, {info.age}
                                </MainText>

                                <MainSubInfo>
                                    {info.type}, {info.sexuality}, {info.gender}
                                </MainSubInfo>
                            </MainInfo>
                            <SubInfo>
                                <TouchableOpacity
                                    onPress={() =>
                                        setMoreInfo(prevState => !prevState)
                                    }
                                >
                                    <MoreInfoButton>
                                        {`${moreInfo ? 'Less' : 'More'} info`}
                                    </MoreInfoButton>
                                    {moreInfo && (
                                        <Text>
                                            {info.name}, {info.age}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </SubInfo>
                        </TotalInformation>
                    </InformationContainer>
                </View>
            </TouchablePlatform>
        </TouchableArea>
    );
};

const InformationContainer = styled.View`
    justify-content: center;
    flex-direction: row;
`;

const TotalInformation = styled.View`
    background-color: white;
    width: 80%;
    border-radius: 10px;
    overflow: hidden;
    margin-top: -40px;
    shadow-opacity: 0.55;
    shadow-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    elevation: 5;
`;

const MoreInfoButton = styled.Text`
    text-align: center;
    color: #ccc;
`;

const MainInfo = styled.View`
    padding: 10px;
`;

const MainText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const MainSubInfo = styled.Text`
    font-size: 14px;
    font-weight: 300;
`;

const SubInfo = styled.View`
    border-color: #ccc;
    border-width: 1px;
    padding: 5px;
`;

const ImageContainer = styled.View`
    width: 100%;
    height: ${Dimensions.get('window').width * 0.7};
    overflow: hidden;
    background-color: red;
    border-radius: 10px;
`;

const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const TouchableArea = styled.View`
    /* overflow: hidden; */
    /* flex: 1; */
    margin: 20px;
    /* background-color: green; */
`;

export default candidateListItem;
