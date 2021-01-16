import { Injectable } from '@angular/core';

@Injectable()

export class ApiData {
    public getProducts(){
        return [
            {name : 'SamsungTv', price: 43555.44, category: 'Electronics', likes: 0, dislikes: 0},
            {name : 'Nike Casual', price: 4555.44, category: 'Shoe', likes: 0, dislikes: 0},
            {name : 'XiaomiTv', price: 23555.44, category: 'Electronics', likes: 0, dislikes: 0},
            {name : 'Realme watch', price: 2555.44, category: 'Electronics', likes: 0, dislikes: 0},
            {name : 'Woodland shoe', price: 3555.44, category: 'Shoe', likes: 0, dislikes:0 }
        ]
    }
}