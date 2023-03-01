import { Component } from '@angular/core';

import {categories} from "../categoriess";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories = categories;
}
