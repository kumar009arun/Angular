import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public frmRegister = this.fb.group({
    Name: ['Samsung'],
    Price: [''],
    frmDetails : this.fb.group({
      City: [''],
      IsInStock: ['']
    })
  });

  ngOnInit(): void {
  }

  public txtName = new FormControl('John');
  public yourCity = new FormControl('Hyd');

  Update(){
    this.txtName.setValue('Arun');
    this.yourCity.patchValue('Delhi');
  }


}
