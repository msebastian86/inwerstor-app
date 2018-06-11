import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './globals.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [GlobalsService]
})


export class AppComponent {

	title:string = 'Investor App';
	cenaZakupu:number = 243000;
	rynekZakupu: string = '';
	wkladWlasny: number = 77000;
	podatekPcc: number = 0.02;
	kredytKwota: number;
	notariusz: number = 3000;
	prowizjaBanku: number = 2;
	prowizjaAgencji: number = 0;
	czynsz: number = 0;
	marzaBanku: number = 1.8;
	lataKredytu: number = 30;
	oprocentowanieWibor: number = 2;
	rata: number;
	dochod: number = (this.czynsz - this.rata);
	cost: number = this.wkladWlasny + (this.cenaZakupu*(this.prowizjaBanku/100));

	constructor(private data: GlobalsService) {}

	ngOnInit(){
		this.data.currentCost.subscribe(cost => this.cost = cost);
		this.data.currentRata.subscribe(rata => this.rata = rata);
		this.newTotalCost();
		this.getDochod();
	}
	
	kwotaKredytu(){
		this.kredytKwota = this.cenaZakupu - this.wkladWlasny;
		return this.kredytKwota;
	}

	rataKredytu(){
		let oprocentowanie = (this.oprocentowanieWibor + this.marzaBanku)/100;
		let q = Math.pow(1 + oprocentowanie/12, this.lataKredytu*12);
		this.rata = this.kredytKwota * q * ((1 + oprocentowanie/12 - 1) / (q-1));
		this.data.changeRata(this.kredytKwota * q * ((1 + oprocentowanie/12 - 1) / (q-1)));
	}

	getDochod(){
		this.dochod = (this.czynsz - this.rata);
	}

	newTotalCost(){

		if(this.rynekZakupu=="rynek_pierwotny"){
			this.data.changeCost(this.wkladWlasny + this.cenaZakupu*(this.prowizjaBanku/100) + this.notariusz);
		} else {
			this.data.changeCost(this.wkladWlasny + this.cenaZakupu*(this.prowizjaBanku/100) + (this.cenaZakupu*(this.prowizjaAgencji/100)) + this.notariusz + (this.cenaZakupu * this.podatekPcc));
		}
	}


}