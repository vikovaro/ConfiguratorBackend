import { ExceptionFilter, ArgumentsHost, NotFoundException } from '@nestjs/common';
export declare class ExceptionsFilter implements ExceptionFilter {
    readonly ignoredExceptions: (typeof NotFoundException)[];
    catch(exception: any, host: ArgumentsHost): void;
}
