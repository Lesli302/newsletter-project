import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  API_URL: string = "http://localhost:8080/newsletterApi/";
  
  constructor(private http: HttpClient) { }
  
  addNewsletter(file:File){
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post(this.API_URL + 'sendNewsletter', formData);
  }
}