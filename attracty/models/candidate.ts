class Candidate {
    id: string;
    info: Object;
    associated: null | [];
    photos: [];
    constructor(id, info, associated, photos) {
        this.id = id;
        this.info = info;
        this.associated = associated;
        this.photos = photos;
    }
}

export default Candidate;
