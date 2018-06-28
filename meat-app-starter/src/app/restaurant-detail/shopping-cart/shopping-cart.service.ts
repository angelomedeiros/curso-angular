import { CartItem } from './cart-item.model'
import { IMenuItem } from '../menu-item/menu-item.model'
 
export class ShoppingCartService {

	itens: CartItem[] = []

	clear() {
		this.itens = []
	}

	addItem(item: IMenuItem) {
		let foundItem = this.itens.find( mItem => mItem.menuItem.id == item.id )
		if (foundItem) {
			foundItem.quantity++
		} else {
			this.itens.push(new CartItem(item))
		}
	}

	removeItem(item: CartItem) {
		this.itens.splice(this.itens.indexOf(item), 1)
	}

	total(): number {
		return this.itens
								.map(item => item.value())
								.reduce((prev, value) => prev + value, 0)
	}

}