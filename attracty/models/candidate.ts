import { ICandidateProps } from '../types/candidates';

class Candidate {
    id: ICandidateProps;
    info: ICandidateProps;
    associated: ICandidateProps;
    photos: ICandidateProps;
    constructor(id, info, associated, photos) {
        this.id = id;
        this.info = info;
        this.associated = associated;
        this.photos = photos;
    }
}

export default Candidate;
