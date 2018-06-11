import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalsService {

	private totalCostSource = new BehaviorSubject<number>(666);
	currentCost = this.totalCostSource.asObservable();

	changeCost (cost: number){
		this.totalCostSource.next(cost);
	}

}
