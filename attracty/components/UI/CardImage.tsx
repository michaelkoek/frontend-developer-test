import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { ICandidateProps } from '../../types/candidates';

const CardImage: React.FC<ICandidateProps> = ({ photos }) => {
    return (
        <ImageContainer>
            <ProfileImage resizeMode="cover" source={{ uri: photos[0].url }} />
        </ImageContainer>
    );
};

const ImageContainer = styled.View`
    width: 100%;
    height: ${Dimensions.get('window').height * 0.4};
    overflow: hidden;
    border-radius: 3px;
`;
const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export default CardImage;
