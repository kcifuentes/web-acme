import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenInterface} from '@app/interfaces/token.interface';
import {BCryptServiceService} from '@app/services/bcrypt-service.service';
import {isNullOrUndefined} from '@app/utils/helpers';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    constructor(private bCrypt: BCryptServiceService) {
    }

    setToken(tokenData: TokenInterface) {
        const _tok = JSON.stringify(tokenData);
        const encToken = this.bCrypt.encode(_tok);

        localStorage.setItem('asc_tkn', encToken);
    }

    getToken(): TokenInterface {
        const _tokEnc = localStorage.getItem('asc_tkn');

        if (isNullOrUndefined(_tokEnc)) {
            return null;
        }

        return JSON.parse(this.bCrypt.decode(_tokEnc));
    }

    deleteToken() {
        localStorage.removeItem('asc_tkn');
    }

    getHeaders(auth: boolean = true): HttpHeaders {
        if (auth) {
            const token = this.getToken();
            if (!isNullOrUndefined(token)) {
                return new HttpHeaders({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.token}`
                });
            }
        }

        return new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });
    }
}
