// export const SET_CANDIDATES = 'SET_CANDIDATES';

export enum CANDIDATES {
    SET,
}

interface ISetCandidateAction {
    type: typeof CANDIDATES.SET;
}

export type CandidateTypes = ISetCandidateAction;
