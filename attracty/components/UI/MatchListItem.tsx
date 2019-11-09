import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { ICandidateProps } from '../../types/candidates';

interface IMatchListProps extends ICandidateProps {
    photo: string;
}

const MatchListItem: React.FC<IMatchListProps> = ({ info, photo }) => {
    const availableChat = false;
    return (
        <TouchableOpacity>
            <MatchItem>
                <ProfileImg source={{ uri: photo }} />
                <InfoContainer>
                    <UserName>{info.name}</UserName>
                    <View>
                        {!availableChat && (
                            <EmptyChat>Start typing something ...</EmptyChat>
                        )}
                    </View>
                </InfoContainer>
            </MatchItem>
        </TouchableOpacity>
    );
};

const MatchItem = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 25px;
`;
const ProfileImg = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: #ccc;
    border-color: #e0917a;
    border-width: 1px;
`;

const InfoContainer = styled.View`
    margin-left: 25px;
    justify-content: center;
    align-items: flex-start;
`;

const UserName = styled.Text`
    margin-bottom: 10px;
    font-weight: 400;
`;

const EmptyChat = styled.Text`
    font-style: italic;
    color: #ccc;
`;

export default MatchListItem;
