import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';

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
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const candidates: ICandidateProps[] = useSelector(
        state => state.candidate.availableCandidates
    );
    const dispatch = useDispatch();

    // Fetch the candidates
    const loadCandidates = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(candidateActions.fetchCandidates());
        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
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
                <Text>No candidates found! </Text>
            </View>
        );
    }

    return (
        <FlatList
            onRefresh={loadCandidates}
            refreshing={isRefreshing}
            data={candidates}
            keyExtractor={(item: ICandidateProps) => item.id}
            renderItem={(itemData: { item: ICandidateProps }) => {
                const { info, id, photos } = itemData.item;
                return (
                    <CandidateItem
                        id={id}
                        info={info}
                        photos={photos}
                        onSelect={onSelectCandidate}
                    />
                );
            }}
        />
    );
};

export default PeopleListScreen;
