import { Injectable } from '@angular/core';

@Injectable()

export class DataService {
    constructor() {}

    public getCategory(){
        return [
            {categoryId: 1, categoryName: 'Electronics'},
            {categoryId: 2, categoryName: 'Shoes'}
        ]
    }

    public getProduct(){
        return [
            {productId : 1, name: 'SamsungTv', price : 320000.23, categoryId: 1},
            {productId : 2, name: 'MiTv', price : 20000.23, categoryId: 1},
            {productId : 3, name: 'Nike casual', price : 4300.23, categoryId: 2},
            {productId : 4, name: 'Lee Cooper', price : 4900.23, categoryId: 2},
        ]
    }
}