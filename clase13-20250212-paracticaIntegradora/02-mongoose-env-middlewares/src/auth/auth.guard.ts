
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

const validateRequest = (request, roles) => {
    console.log(roles)
    if (request.query.user && request.query.password && request.query.user == "admin" && request.query.password == "123") {
        return true
    }

    return false
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        const request = context.switchToHttp().getRequest();
        return validateRequest(request, roles);
    }
}
