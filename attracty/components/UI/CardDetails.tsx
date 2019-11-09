import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';

import { ICandidateProps } from '../../types/candidates';

// Simulate logged in user profile desires
const profile = ['girls', 'girl', 'threesome', 'fun', 'sex'];

const CardDetails: React.FC<ICandidateProps> = ({ info }) => {
    return (
        <DetailContainer>
            <DetailTop>
                <TopInfo>
                    {info.name}, {info.age}
                </TopInfo>
                <Gender>
                    {info.type}, {info.gender}
                </Gender>
            </DetailTop>

            {!!info.desires && info.desires.length > 0 && (
                <DetailBottom>
                    {info.desires.map((desire, index, arr) => {
                        const sameInterest: boolean = profile.includes(
                            desire.replace(' ', '').toLowerCase()
                        );
                        return (
                            <DesireText match={sameInterest} key={desire}>
                                {desire}
                                {arr.length - 1 !== index && ','}
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
    border-color: #e0917a;
    border-top-width: 1px;
    padding: 10px 0 0;
    flex-direction: row;
    overflow: hidden;
`;

const TopInfo = styled.Text`
    font-size: ${Dimensions.get('window').height < 400 ? 16 : 20}px;
    font-weight: bold;
    color: darkslategray;
    margin-bottom: 5px;
`;

const DesireText = styled.Text<{ match?: boolean }>`
    color: ${({ match }) => (match ? '#E0917A ' : '#B0B5C8')};
    margin-right: 2px;
    text-transform: capitalize;
    font-weight: ${({ match }) => (match ? 500 : 'normal')};
`;

const Gender = styled.Text`
    text-transform: capitalize;
    color: #b0b5c8;
`;

export default CardDetails;
