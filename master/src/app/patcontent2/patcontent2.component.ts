import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../model/note';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-patcontent2',
  templateUrl: './patcontent2.component.html',
  styleUrls: ['./patcontent2.component.css']
})
export class Patcontent2Component implements OnInit {

  @Input() notes: Note[];

  displayedColumns = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes)
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
