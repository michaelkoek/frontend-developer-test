import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import styled from 'styled-components/native';

import { ICandidateProps, CANDIDATE_CHOOSE } from '../types/candidates';
import * as candidateActions from '../store/actions/candidate';
import CandidateItem from '../components/Candidate/CandidateItem';

type Props = {
    navigation: NavigationStackProp;
};

const PeopleListScreen: React.FC<Props & ICandidateProps> = ({
    navigation,
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [error, setError] = useState<null | string>(null);
    const candidates: ICandidateProps[] = useSelector(
        state => state.candidate.availableCandidates
    );
    const dispatch = useDispatch();

    // Fetch the candidates
    const loadCandidates = useCallback(async () => {
        setError(null);
        try {
            await dispatch(candidateActions.fetchCandidates());
        } catch (err) {
            setError(err.message);
        }
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        // refetching the data when user is on page
        const willFocusSub = navigation.addListener(
            'willFocus',
            loadCandidates
        );

        return () => {
            // clean the focus
            willFocusSub.remove();
        };
    }, [loadCandidates]);

    useEffect(() => {
        setIsLoading(true);
        // When it's done loading set to false
        loadCandidates().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadCandidates]);

    const onSelectCandidate = (id: string, chooseType: CANDIDATE_CHOOSE) => {
        console.log({ id, chooseType });
    };

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (!isLoading && candidates.length === 0) {
        return (
            <View>
                <Text>No candidates found!</Text>
            </View>
        );
    }

    const testArr = candidates.slice(0, 2);

    return (
        <CardContainer>
            <View>
                {testArr
                    .map((item: ICandidateProps, index: number) => {
                        if (index < currentIndex) return null;
                        return (
                            <CandidateItem
                                key={item.id}
                                isCurrentIndex={index === currentIndex}
                                id={item.id}
                                info={item.info}
                                photos={item.photos}
                            />
                        );
                    })
                    .reverse()}
            </View>
        </CardContainer>
    );
};

const CardContainer = styled.View`
    flex: 1;
    background-color: purple;
`;

export default PeopleListScreen;
