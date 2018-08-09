import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CONSTANTS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _httpService: HttpClient) { }

 
  addAdmin(data) {

    return this._httpService.post(CONSTANTS.ADMIN, data);
}


getAdmin() {
    return this._httpService.get(CONSTANTS.ADMIN);
}

deleteAdmin(id) {
  return this._httpService.delete(CONSTANTS.ADMIN + '/' + id)
}

}
