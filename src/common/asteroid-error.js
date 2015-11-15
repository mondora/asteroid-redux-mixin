export default class AsteroidError extends Error {

    constructor ({error, reason, details}) {
        super();
        this.message = reason;
        this.code = error;
        this.details = details;
    }

}
