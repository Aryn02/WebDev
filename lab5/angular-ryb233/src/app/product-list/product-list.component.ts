import { Component, OnInit } from '@angular/core';
import {Category, categories} from "../categoriess";
import {Product, products} from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  products = products;
  category : { id: number | undefined; name: string | undefined };

  constructor(private route: ActivatedRoute,) {
    this.category = new class implements Category {
      // @ts-ignore
      id: number | undefined;
      // @ts-ignore
      name: string | undefined;
    }
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // @ts-ignore
    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
