import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categoryList = [];

  constructor(private ds : DataService) { }

  ngOnInit(){
    this.categoryList = this.ds.getCategory();
  }

  CategoryClick(it) {
    
  }

}
