import { CANDIDATES, CandidateState } from '../types';
import { ICandidateProps } from '../../types/candidates';

import Candidate from '../../models/candidate';

const initialState: CandidateState = {
    availableCandidates: [],
    matchedCandidates: [],
};

const candidateReducer = (state = initialState, action): CandidateState => {
    const removeFromFetchedList = (personId: string): ICandidateProps[] => {
        const findPerson = state.availableCandidates.findIndex(
            candidate => candidate.id === personId
        );

        const removeFoundPerson = [...state.availableCandidates];
        removeFoundPerson.splice(findPerson, 1);
        return removeFoundPerson;
    };

    switch (action.type) {
        case CANDIDATES.SET:
            if (state.availableCandidates.length === 0) {
                const mappedCandidates = action.candidates.map(
                    candidate =>
                        new Candidate(
                            candidate.id,
                            candidate.info,
                            candidate.associated,
                            candidate.photos
                        )
                );

                return {
                    ...state,
                    availableCandidates: mappedCandidates,
                };
            }
            return {
                ...state,
            };

        case CANDIDATES.MATCH:
            const matched = state.availableCandidates.find(
                candidate => candidate.id === action.candidateId
            );

            return {
                ...state,
                availableCandidates: removeFromFetchedList(action.candidateId),
                matchedCandidates: [...state.matchedCandidates, matched],
            };

        case CANDIDATES.DISLIKE:
            return {
                ...state,
                availableCandidates: removeFromFetchedList(action.candidateId),
            };

        default:
            return state;
    }
};

export default candidateReducer;
