import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { CandidatePhotos } from '../../types/candidates';

const CardImage: React.FC<CandidatePhotos[]> = ({ photos }) => {
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
`;
const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export default CardImage;
