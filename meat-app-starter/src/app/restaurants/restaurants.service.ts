import { Injectable }  from '@angular/core'
import { Http }        from '@angular/http'

import { Observable }  from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { IRestaurant } from './restaurant/restaurant.model'
import { IMenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import { MEAT_API } 	 from '../app.api'

import {ErrorHandler}  from '../app.error-handler'

@Injectable()
export class RestaurantsService {

	constructor(private http: Http){}

	restaurants(): Observable<IRestaurant[]> {
		return this.http.get(`${MEAT_API}/restaurants`)
										.map(response => response.json())
										.catch(ErrorHandler.handleError)
	}

	restaurantById(id: string): Observable<IRestaurant> {
		return this.http.get(`${MEAT_API}/restaurants/${id}`)
										.map(response => response.json())
										.catch(ErrorHandler.handleError)
	}

	reviewsOfRestaurant(id: string): Observable<any> {
		return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
										.map(response => response.json())
										.catch(ErrorHandler.handleError)
	}

	menuOfRestaurant(id: string): Observable<IMenuItem[]> {
		return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
										.map(response => response.json())
										.catch(ErrorHandler.handleError)
	}
}