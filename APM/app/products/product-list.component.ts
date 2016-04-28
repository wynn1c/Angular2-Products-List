import { Component, OnInit } from 'angular2/core';

import { IProduct } from './product'
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products//product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})

export class ProductListComponent implements onInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false; 
    listFilter: string = '';
    products: IProduct[] = [
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];
    
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
    ngOninit(): void {
        console.log('In Oninit');
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}