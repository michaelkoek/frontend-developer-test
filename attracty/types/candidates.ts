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

export interface ICandidateProps {
    id: string;
    info: CanidateInfo;
    associated: null | [];
    photos: Object;
}
