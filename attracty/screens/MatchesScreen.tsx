import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import { ICandidateProps } from '../types/candidates';
import MatchListItem from '../components/UI/MatchListItem';

const MatchesScreen = () => {
    const matches = useSelector(state => state.candidate.matchedCandidates);
    console.log('matchscreen==>', matches.length === 0 || !matches, matches);

    if (matches.length === 0 || !matches) {
        return (
            <Container>
                <Text>No matches yet, keep swiping 😄</Text>
            </Container>
        );
    }

    return (
        <Container>
            <FlatList
                data={matches}
                keyExtractor={(item: ICandidateProps) => item.id}
                renderItem={(itemData: { item: ICandidateProps }) => {
                    const { info, id, photos } = itemData.item;
                    return <MatchListItem info={info} photo={photos[0].url} />;
                }}
                ItemSeparatorComponent={() => <Separator />}
            />
        </Container>
    );
};

MatchesScreen.navigationOptions = {
    headerTitle: 'Your matches',
};

const Separator = styled.View`
    height: 1px;
    border-top-width: 1px;
    border-color: #ccc;
`;

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default MatchesScreen;
