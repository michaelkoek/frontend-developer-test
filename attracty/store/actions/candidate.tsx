import { CANDIDATES, CandidateTypes } from '../types';
import { ICandidateProps } from '../../types/candidates';

import * as ENV from '../../env';

export const fetchCandidates = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://fld-devtest-api.herokuapp.com/api/v1/users',
                {
                    headers: {
                        'session-token': ENV.SessionKey,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Something went wrong! :(');
            }

            const resData = await response.json();

            // remove duplicated id's
            const uniqueCandidates: ICandidateProps[] = [
                ...new Set(resData.data.map(JSON.stringify)),
            ].map(JSON.parse);

            dispatch({
                type: CANDIDATES.SET,
                candidates: uniqueCandidates,
            });
        } catch (err) {
            throw new Error(err);
        }
    };
};

export const matchedCandidates = (id: string): CandidateTypes => {
    return {
        type: CANDIDATES.MATCH,
        candidateId: id,
    };
};

export const dislikeCandidate = (id: string): CandidateTypes => {
    return {
        type: CANDIDATES.DISLIKE,
        candidateId: id,
    };
};
