import React from 'react';
import styled from 'styled-components/native';

const MatchListItem = ({ info, photo }) => {
    const availableChat = false;
    return (
        <MatchItem>
            <ProfileImg source={{ uri: photo }} />
            <InfoContainer>
                <UserName>{info.name}</UserName>
                <Chat>
                    {!availableChat && (
                        <EmptyChat>Start typing something ...</EmptyChat>
                    )}
                </Chat>
            </InfoContainer>
        </MatchItem>
    );
};

const MatchItem = styled.TouchableOpacity``;
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
    width: 250px;
    justify-content: center;
    align-items: flex-start;
`;

const UserName = styled.Text``;

const Chat = styled.View``;

const EmptyChat = styled.Text``;

export default MatchListItem;
