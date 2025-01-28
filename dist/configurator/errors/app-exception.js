"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppException = void 0;
class AppException extends Error {
    constructor(message) {
        super(message);
        this.name = 'AppException';
    }
}
exports.AppException = AppException;
//# sourceMappingURL=app-exception.js.map