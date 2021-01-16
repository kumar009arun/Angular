import { Component, OnInit } from '@angular/core';
// import {sentenceCasePipe} from './../sentencecase.pipe';
import {CapcthaService} from './../captcha.service';
import { ApiData } from './../apidata.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private captcha: CapcthaService, private api: ApiData) { }

  ngOnInit(){
    this.code = this.captcha.generateCode();
    this.products = this.api.getProducts();
  }

  public code ;
  public products = [];

  public data = 'hello!world';
  public lowerCase = "HELLO!";
  public number = 123;
  public selectedProduct = [];
  public mfd = new Date();

  public selectCategory = ['Select a category', 'Electronics', 'Shoes', 'Furnitures'];

  public electronics = ['Select a electronicProduct', 'SamsungTv', 'MiTv'];

  public Shoes = ['Select a Shoe', 'Nike casual', 'Puma boot'];

  public ChangeCategory() {
    alert('clicked');
  }

}
