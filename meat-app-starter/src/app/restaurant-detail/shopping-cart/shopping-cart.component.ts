import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  clear() {
  	this.shoppingCartService.clear()
  }

  itens(): any[] {
  	return this.shoppingCartService.itens
  }

  total(): number {
  	return this.shoppingCartService.total()
  }

  removeItem(item: any) {
  	this.shoppingCartService.removeItem(item)
  }

  addItem(item: any) {
  	this.shoppingCartService.addItem(item)
  }

}
