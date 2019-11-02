export type CanidateInfo = {
    age: number;
    type: string;
    gender: string;
    sexuality: string;
    name: string;
    about: string;
    desires: string[];
    interests: string[];
};

export type CandidatePhotos = {
    url: string;
    width: number;
    height: number;
};

export interface ICandidateProps {
    id: string;
    info: CanidateInfo;
    associated?: null | ICandidateProps[];
    photos: CandidatePhotos;
}

export enum CANDIDATE_CHOOSE {
    LIKE,
    DISLIKE,
}
