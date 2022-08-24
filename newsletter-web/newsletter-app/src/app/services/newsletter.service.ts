import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  API_URL: string = "http://localhost:8080/newsletterApi/";
  
  constructor(private http: HttpClient) { }
  
  addNewsletter(file:File){
	alert(file);
	// Create form data
      const formData = new FormData(); 
        alert(file.name);
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
    alert(formData);
	return this.http.post(this.API_URL + 'sendNewsletter', formData);
  }
}
