import React from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import ImageSlider from 'react-native-image-slider';

import { ICandidateProps } from '../../types/candidates';

const CardImage: React.FC<ICandidateProps> = ({ photos }) => {
    const images: string[] = photos.map(photo => photo.url);

    return (
        <ImageContainer>
            {images.length > 1 ? (
                <ImageSlider
                    images={images}
                    customSlide={({ index, item, style }) => (
                        <View key={index} style={[style]}>
                            <ProfileImage
                                resizeMode="cover"
                                source={{ uri: item }}
                            />
                        </View>
                    )}
                />
            ) : (
                <ProfileImage resizeMode="cover" source={{ uri: images[0] }} />
            )}
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
