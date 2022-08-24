import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersForm = new FormGroup({
	fileName: new FormControl('', Validators.required)
  });
  
  file!: File;
  
  
  
  constructor(
	private userService: UserService) { }

  ngOnInit(): void {
	
  }
  
 uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
        this.file = fileList[0];
    }
  }
    
  get usersFile(): any {
    return this.usersForm.get('fileName');
  }
  
  onSubmit():any{
	if(this.usersFile.value==""){
		this.usersFile.touched=true;
		return false;
	}
	this.userService.addList(this.file).subscribe(fUsers =>{
        console.log(fUsers);
        
    })
  }

}
