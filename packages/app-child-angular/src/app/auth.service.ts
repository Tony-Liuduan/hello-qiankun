import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import actions from 'src/shared/actions';
import { Authentication } from './auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) { }

    getUserInfo(): Observable<Authentication> {
        if (window.__POWERED_BY_QIANKUN__) {
            actions.setGlobalState({ count: actions.globalState$.getValue()?.count + 1 });
            if (actions.globalProps?.userInfo?.name) {
                return of(actions.globalProps.userInfo);
            }
        }
        return of({})
            .pipe(
                map((current: any) => {
                    return {
                        identity: current.ldapId || current.userId,
                        name: current.ldapId || current.nickname,
                        roles: [],
                        phone: current.assistant
                            ? current.assistant.phone
                            : current.phone || undefined,
                        avatar: current.teacher ? current.teacher.avatar : '',
                    } as Authentication;
                }),
            );
    }
}
