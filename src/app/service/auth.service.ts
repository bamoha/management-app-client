import {Injectable} from '@angular/core';
import {CONSTANTS} from './constants';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public isLoggedIn: boolean = false;

    constructor(private _httpService: HttpClient) {
        this.isLoggedIn = !!localStorage.getItem('admin.token');
    }


    loggedInStatus() {
        return this.isLoggedIn = !!localStorage.getItem('admin.token');
    }

    login(email, password) {
        let data = {
            email: email,
            password: password
        };
        return this._httpService.post(CONSTANTS.LOGIN, data);
    }

    logInStatus() {
        return !!localStorage.getItem('admin.token');
    }


    logout() {
        localStorage.removeItem('admin.token');
        localStorage.removeItem('admin.profile');
        this.isLoggedIn = false;

    }

}
