import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}
  ngOnInit(){}
  title = 'ECommerce';
  userName = 'SamBillings';
  first = 'York';
  second = 'shire';
  isVisible: boolean = false ;
  txtName : string = 'show';

  public third: string;
  public forth : string;

  public products = [
    {name : 'SamsungTv', price: 43555.44, category: 'Electronics'},
    {name : 'Nike Casual', price: 4555.44, category: 'Shoe'},
    {name : 'XiaomiTv', price: 23555.44, category: 'Electronics'},
  ]


  public data = {
    name: 'SamsungTv',
    price : 56000.87,
    photo: './../assets/download.jfif'
  }

  Preview() {
    this.isVisible = (this.isVisible == false) ? true : false;
    this.txtName = (this.txtName == 'show') ? 'hide' : 'show';

  }


}
