import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-patcontent',
  templateUrl: './patcontent.component.html',
  styleUrls: ['./patcontent.component.css']
})
export class PatcontentComponent implements OnInit {
  
  user: User;
  
  constructor(private route:ActivatedRoute,private service:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id=params['id'];
      if(!id) id=1;
      this.user = null;
      this.service.user.subscribe(user=>{
        if(user.length == 0 ) return;

        setTimeout(() => {
        this.user = this.service.userById(id);
        }, 300);
      });

    })
  }

}
