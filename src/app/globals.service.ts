import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

	public cena:number = 1111;

	getData(){
		alert('ss');
		return this.cena;
	}

	insertData(data: number){
		this.cena = data;
		console.log(this.cena);
	}

  	constructor() { }

}
