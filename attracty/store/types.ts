import { ICandidateProps } from '../types/candidates';

export enum CANDIDATES {
    SET,
    MATCH,
    DISLIKE,
}

export interface CandidateState {
    availableCandidates: ICandidateProps[];
    matchedCandidates?: ICandidateProps[];
}

interface ISetCandidateAction {
    type: typeof CANDIDATES.SET;
}

interface IMatchCandidateAction {
    type: typeof CANDIDATES.MATCH;
    candidateId: string;
}

interface IDislikeCandidateAction {
    type: typeof CANDIDATES.DISLIKE;
    candidateId: string;
}

export type CandidateTypes =
    | ISetCandidateAction
    | IMatchCandidateAction
    | IDislikeCandidateAction;
