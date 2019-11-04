import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Image,
    Animated,
    Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

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

    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    const testArr = candidates.slice(0, 2);
    // {testArr.map((item: ICandidateProps) => (
    //     <CandidateItem
    //         key={item.id}
    //         id={item.id}
    //         info={item.info}
    //         photos={item.photos}
    //         onSelect={onSelectCandidate}
    //     />
    // ))}

    console.log(testArr);

    return (
        <CardContainer>
            <View>
                {testArr.map((item: ICandidateProps) => (
                    <Card key={item.id}>
                        <View>
                            <Animated.View
                                style={{
                                    height: SCREEN_HEIGHT - 120,
                                    width: SCREEN_WIDTH,
                                    padding: 10,
                                    position: 'absolute',
                                }}
                            >
                                <ImageContainer>
                                    <ProfileImage
                                        style={{
                                            resizeMode: 'cover',
                                        }}
                                        source={{ uri: item.photos[0].url }}
                                    />

                                    <StyledLinearGradient
                                        colors={[
                                            'transparent',
                                            'rgba(0,0,0,1)',
                                        ]}
                                    />
                                </ImageContainer>

                                <InfoContainer>
                                    <InfoHeader>
                                        <Title>
                                            {item.info.name}, {item.info.age}
                                        </Title>
                                    </InfoHeader>
                                    <Subtitle>{item.info.sexuality}</Subtitle>
                                    <Text>{item.id}</Text>
                                </InfoContainer>
                            </Animated.View>
                        </View>
                    </Card>
                ))}
            </View>
        </CardContainer>
    );
};

const Title = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;

const Subtitle = styled.Text`
    font-size: 14px;
`;

const InfoContainer = styled.View`
    padding: 0 20px;
    position: absolute;
    bottom: 50px;
`;

const InfoHeader = styled.View`
    flex-direction: row;
`;

const CardContainer = styled.View`
    /* background-color: black; */
    flex: 1;
    /* padding: 20px; */
`;

const Card = styled.View`
    flex: 1;
`;

const ImageContainer = styled.View`
    border-radius: 20px;
    background-color: red;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ProfileImage = styled.Image`
    flex: 1;
`;

const StyledLinearGradient = styled(LinearGradient)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
`;

export default PeopleListScreen;
