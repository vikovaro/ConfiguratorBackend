"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const app_exception_1 = require("../errors/app-exception");
let ExceptionsFilter = class ExceptionsFilter {
    constructor() {
        this.ignoredExceptions = [
            common_1.NotFoundException,
            common_1.ForbiddenException,
            common_1.UnauthorizedException,
            common_1.BadRequestException,
        ];
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof app_exception_1.AppException) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: exception.message,
            });
        }
        else {
            const isIgnoredException = this.ignoredExceptions.some((ignoredException) => exception instanceof ignoredException);
            const status = exception instanceof common_1.HttpException
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            let message;
            if (isIgnoredException) {
                if (exception instanceof common_1.BadRequestException) {
                    message = exception.getResponse()['message'][0];
                }
                else {
                    message = exception.message;
                }
            }
            else {
                console.log('mes', exception);
                message = 'internal-server-error';
            }
            response.status(status).json({
                statusCode: status,
                message: message,
            });
        }
    }
};
exports.ExceptionsFilter = ExceptionsFilter;
exports.ExceptionsFilter = ExceptionsFilter = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Catch)()
], ExceptionsFilter);
//# sourceMappingURL=exception-filter.js.map