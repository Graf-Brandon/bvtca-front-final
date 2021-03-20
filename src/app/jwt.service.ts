import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  jwt_key: string = 'bvtca_final-proj_jwt';

  constructor() { }

  setJwt(item:string) {
    localStorage.setItem(this.jwt_key, item);
  }

  getJwt() {
    return localStorage.getItem(this.jwt_key);
  }

  removeJwt() {
    localStorage.removeItem(this.jwt_key);
  }
}