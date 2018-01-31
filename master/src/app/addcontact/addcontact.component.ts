import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../model/user';
import { FormControl,Validators  } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  user: User;
  avatars = [
    'svg-1','svg-2','svg-3','svg-4'
  ];
  constructor(private dialogRef : MatDialogRef<AddcontactComponent>,
              private userService : UserService) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name':'';
  }
  
  ngOnInit() {
    this.user = new User();
  }

  save(){
    this.userService.addUser(this.user).then(user =>{
      this.dialogRef.close(user);
    })
    this.dialogRef.close(this.user)
  }
  
  dismiss(){
  }
}
