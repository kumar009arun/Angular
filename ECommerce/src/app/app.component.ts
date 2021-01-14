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

  productName : string = '';
  productPrice: number = 0 ;
  productCategory : string = '';
  productLike : number = 0;
  productDisLike : number = 0;



  addingProduct = {
    na : '',
    pr : 0,
    cat : '',
    li : 0,
    dl : 0

  }


  public products = [
    {name : 'SamsungTv', price: 43555.44, category: 'Electronics', likes: 0, dislikes: 0},
    {name : 'Nike Casual', price: 4555.44, category: 'Shoe', likes: 0, dislikes: 0},
    {name : 'XiaomiTv', price: 23555.44, category: 'Electronics', likes: 0, dislikes: 0},
    {name : 'Realme watch', price: 2555.44, category: 'Electronics', likes: 0, dislikes: 0},
    {name : 'Woodland shoe', price: 3555.44, category: 'Shoe', likes: 0, dislikes:0 },
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

  Likes(it) {
    it.likes++;
  }

  Dislike(it) {
    it.dislikes++;
  }

  delete(i) {
    let con = confirm("Are you sure want to delete ?");
    if(con) {
      this.products.splice(i, 1);
    }
  }

  Adding() {
    alert("clicked"); 
    this.addingProduct = {
      na : this.productName,
      pr : this.productPrice,
      cat: this.productCategory,
      li : this.productLike,
      dl : this.productDisLike
    }

    // this.products.push(this.addingProduct);
    
  }
}
