import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  newsletterForm = new FormGroup({
	fileName: new FormControl('', Validators.required)
  });
  
  file!: File;
  
  
  
  constructor(
	private newsletterService: NewsletterService) { }

  ngOnInit(): void {
	
  }
  
 uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
        this.file = fileList[0];
    }
  }
    
  get newsletterFile(): any {
    return this.newsletterForm.get('fileName');
  }
  
  onSubmit():any{
	if(this.newsletterFile.value==""){
		this.newsletterFile.touched=true;
		return false;
	}
	
	this.newsletterService.addNewsletter(this.file).subscribe(fNeswsletter =>{
        console.log(fNeswsletter);
        
    })
  }

}
