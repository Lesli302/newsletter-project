import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = "http://localhost:8080/userApi/";
  
  constructor(private http: HttpClient) { }
  
  addUser(email:string):Observable<any>{
	return this.http.post(this.API_URL + 'addUser', email);
  }
 
  addList(file:File):Observable<any>{
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post(this.API_URL + 'addList', formData);
  }
}
