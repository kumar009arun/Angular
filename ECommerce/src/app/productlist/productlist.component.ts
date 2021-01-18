import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  categoryId;
  pro = [];

  constructor(private data : DataService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.ar.snapshot.paramMap.get('id');
    this.pro = this.data.getProduct().filter(x => x.categoryId == this.categoryId);
  }

}
