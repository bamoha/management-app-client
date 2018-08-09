import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CONSTANTS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private _httpService: HttpClient) { }

 
  addStaff(data) {
    return this._httpService.post(CONSTANTS.STAFF, data);
}


getStaff() {
    return this._httpService.get(CONSTANTS.STAFF);
}

editStaff(data, id) {
  return this._httpService.put(CONSTANTS.STAFF + '/' + id, data);
}

getSingleStaff(id){
  return this._httpService.get(CONSTANTS.STAFF + '/' + id)
}

deleteStaff(id) {
  return this._httpService.delete(CONSTANTS.STAFF + '/' + id)
}

}
