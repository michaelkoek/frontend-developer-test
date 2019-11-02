import { CANDIDATES, CandidateTypes } from '../types';

const initialState = {
    availableCandidates: [],
};

const candidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case CANDIDATES.SET:
            return {
                availableCandidates: action.candidates,
            };
        default:
            return state;
    }
};

export default candidateReducer;
