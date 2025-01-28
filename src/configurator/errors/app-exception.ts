export class AppException extends Error {
    constructor(message) {
        super(message);
        this.name = 'AppException';
    }
}
