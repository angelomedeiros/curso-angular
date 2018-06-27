import { Injectable }  from '@angular/core'
import { Http }        from '@angular/http'

import { Observable }  from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { IRestaurant } from './restaurant/restaurant.model'

import { MEAT_API } 	 from '../app.api'

import {ErrorHandler}  from '../app.error-handler'

@Injectable()
export class RestaurantsService {

	// rests: IRestaurant[] = [
	// 	{
 // 			id: "bread-bakery",
 // 			name: "Bread & Bakery",
 // 			category: "Bakery",
 // 			deliveryEstimate: "25m",
 // 			rating: 4.9,
 // 			imagePath: "assets/img/restaurants/breadbakery.png"
	// 	},
	// 	{
 // 			id: "burger-house",
 // 			name: "Burger House",
 // 			category: "Hamburgers",
 // 			deliveryEstimate: "100m",
 // 			rating: 3.5,
 // 			imagePath: "assets/img/restaurants/burgerhouse.png"
	// 	}
	// ]

	// constructor(){}

	// restaurants(): IRestaurant[] {
	// 	return this.rests
	// }
	// http: Http

	constructor(private http: Http){}

	restaurants(): Observable<IRestaurant[]> {
		return this.http.get(`${MEAT_API}/restaurants`)
										.map(response => response.json())
										.catch(ErrorHandler.handleError)
	}
}