import { CANDIDATES, CandidateTypes } from '../types';
import { ICandidateProps } from '../../types/candidates';

import { SessionKey } from '../../keys/session';

export const fetchCandidates = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://fld-devtest-api.herokuapp.com/api/v1/users',
                {
                    headers: {
                        'session-token': SessionKey,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Something went wrong! :(');
            }

            const resData = await response.json();

            console.log(resData.data);

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
