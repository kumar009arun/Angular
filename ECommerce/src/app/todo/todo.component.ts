import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public input : string = " ";

  public ad : string;

  public tasks = ['Meeting at 9am', 'Java class', 'sleep', 'Python', 'cobra'];

  public del(i) {
    this.tasks.splice(i, 1);
  }

  public add() {
    this.ad = this.input;
    this.tasks.push(this.ad);
    this.input = ' ';

    

  }
}
