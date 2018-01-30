import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../model/note'
@Component({
  selector: 'app-patcontent2',
  templateUrl: './patcontent2.component.html',
  styleUrls: ['./patcontent2.component.css']
})
export class Patcontent2Component implements OnInit {

  @Input() notes: Note[];

  constructor() { }

  ngOnInit() {
  }

}
