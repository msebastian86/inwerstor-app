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


	private rataKredytu = new BehaviorSubject<number>(777);
	currentRata = this.rataKredytu.asObservable();

	changeRata (rata: number){
		this.rataKredytu.next(rata);
	}

}
