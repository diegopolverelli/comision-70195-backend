
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Fecha: ${new Date().toLocaleString()} - url: ${req.url}  |  method: ${req.method}`);
        next();
    }
}
