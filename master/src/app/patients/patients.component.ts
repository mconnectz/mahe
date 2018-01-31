import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  users:Observable<User[]>;

  constructor(private userService:UserService,private dialog:MatDialog,private snackbar:MatSnackBar,private router:Router){}  

  ngOnInit(){
    this.users = this.userService.user;
    this.userService.loadAll();
    this.users.subscribe(data =>{
    console.log(data);
    });
  }

  addContact(): void{
    let dialogRef = this.dialog.open(AddcontactComponent,{
      width:'450px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log('The dialog was closed',result);

      if(result){
        this.openSnackBar("Patient added","Navigate")
        .onAction().subscribe(()=>{
            this.router.navigate([result.id]);
        });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackbar.open(message, action, {
      duration: 2000,
    });
  }
}
