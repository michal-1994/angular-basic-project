import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
