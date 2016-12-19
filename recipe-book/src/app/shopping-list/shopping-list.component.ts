import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../ingredient'

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
