import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const profile = ['girls', 'girl', 'threesome', 'fun', 'sex'];

const CardDetails = ({ info }) => {
    return (
        <DetailContainer>
            <DetailTop>
                <TopInfo>
                    {info.name}, {info.age}
                </TopInfo>
                <Gender>{info.gender}</Gender>
            </DetailTop>

            {!!info.desires && info.desires.length > 0 && (
                <DetailBottom>
                    {info.desires.map(desire => {
                        const sameInterest: boolean = profile.includes(
                            desire.replace(' ', '').toLowerCase()
                        );
                        return (
                            <DesireText match={sameInterest} key={desire}>
                                {desire}
                            </DesireText>
                        );
                    })}
                </DetailBottom>
            )}
        </DetailContainer>
    );
};

const DetailContainer = styled.View``;

const DetailTop = styled.View`
    padding: 10px 0;
`;

const DetailBottom = styled.View`
    border-color: #ccc;
    border-top-width: 1px;
    padding: 10px 0 0;
`;

const TopInfo = styled.Text`
    font-size: ${Dimensions.get('window').height < 400 ? 16 : 20}px;
    font-weight: bold;
    color: darkslategray;
    margin-bottom: 5px;
`;

const DesireText = styled.Text<{ match?: boolean }>`
    color: ${({ match }) => (match ? 'red' : 'grey')};
`;

const Gender = styled.Text`
    text-transform: capitalize;
`;

export default CardDetails;
