import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private _users : BehaviorSubject<User[]>;

    private dataStore:{
        users:User[]
    }
    constructor(private http: HttpClient){
        this.dataStore = { users:[] };
        this._users = new BehaviorSubject<User[]>([]);
    }

    get user(): Observable<User[]>{
        return this._users.asObservable();
    }

    userById(id:number){
        return this.dataStore.users.find(x=>x.id == id);
    }

    loadAll(){
        const url = 'https://angular-material-api.azurewebsites.net/users';

        return this.http.get<User[]>(url)
        .subscribe(data => {
            this.dataStore.users = data;
            this._users.next(Object.assign({},this.dataStore).users);
        },error=>{
            console.log("Failed to fetch users");
        });
    }
}