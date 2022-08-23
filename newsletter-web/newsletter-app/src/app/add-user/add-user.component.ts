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
  
  users: any;
  
  constructor(
	private userService: UserService) { }

  ngOnInit() {
	
  }
  
  get userEmail(): any {
    return this.userForm.get('email');
  }
  
  onSubmit(): void {
	
	this.userService.addUser(this.userEmail).subscribe(data =>{
        console.log(data);
        this.users = data;
    })
  }
  
  

}
