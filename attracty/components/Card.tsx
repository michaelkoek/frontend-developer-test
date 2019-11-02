import React from 'react';
import { View, Text } from 'react-native';

import { ICandidateProps } from '../types/candidates';

const Card: React.FC<ICandidateProps> = ({ info }) => {
    return (
        <View>
            <Text>{info.name}</Text>
        </View>
    );
};

export default Card;
