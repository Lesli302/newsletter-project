import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = new FormGroup({
	email: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))
  });
  
  result!: string;
  
  constructor(
	private userService: UserService) { }

  ngOnInit() {
	
  }
  
  get userEmail(): any {
    return this.userForm.get('email');
  }
  
  onSubmit(): any {
	if(this.userEmail.value==""){
		this.userEmail.touched=true;
		return false;
	}
	this.userService.addUser(this.userEmail.value).subscribe(data =>{
        console.log(data);
        return this.result=data;
    })
  }
  
  

}
