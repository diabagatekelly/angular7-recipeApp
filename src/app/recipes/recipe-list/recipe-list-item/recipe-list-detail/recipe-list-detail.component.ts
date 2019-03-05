import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../recipe.model';

@Component({
  selector: 'app-recipe-list-detail',
  templateUrl: './recipe-list-detail.component.html',
  styleUrls: ['./recipe-list-detail.component.css']
})
export class RecipeListDetailComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A new recipe', 'This is a test recipe',
     'https://images.pexels.com/photos/716244/pexels-photo-716244.jpeg?cs=srgb&dl=aloo-aloo-poha-breakfast-716244.jpg&fm=jpg'),
     new Recipe('A second recipe', 'Second test recipe', 'http://www.picserver.org/pictures/salad03-lg.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
