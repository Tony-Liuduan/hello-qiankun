import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from './auth.service';

export const AuthenticationToken = new InjectionToken<Authentication>(
    'Authentication'
);

export interface Authentication {
    identity: string | number;
    name: string;
    phone?: string;
    avatar?: string;
    roles: string[];
}

export function authenticationFactory(authService: AuthService): Observable<Authentication> {
    return authService.getUserInfo().pipe(shareReplay(1));
}
