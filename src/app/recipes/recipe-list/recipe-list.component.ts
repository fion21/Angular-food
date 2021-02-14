import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://image.shutterstock.com/image-photo/chicken-schnitzel-chips-lemon-on-600w-753659290.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.christinascucina.com/wp-content/uploads/2013/04/fullsizeoutput_dd14-1467x2048.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://thomassixt.de/wp-content/uploads/2019/05/wiener-schnitzel-web-bild.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
