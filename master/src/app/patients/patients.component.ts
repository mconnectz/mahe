import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  users:Observable<User[]>;

  constructor(private userService:UserService){}  

  ngOnInit(){
    this.users = this.userService.user;
    this.userService.loadAll();
    this.users.subscribe(data =>{
    console.log(data);
    });
  }

}
