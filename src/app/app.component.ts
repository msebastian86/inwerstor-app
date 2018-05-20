import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { GlobalsService } from './globals.service';
import 'rxjs/add/operator/map';

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
	wkladWlasny: number = 72000;
	kredytKwota: number;
	prowizjaBanku: number = 2;
	marzaBanku: number = 1.8;
	lataKredytu: number = 30;
	miesiaceKredytu: number = this.lataKredytu*12;
	oprocentowanieWibor: number = 2;

	kwotaKredytu(){
		this.kredytKwota = this.cenaZakupu - this.wkladWlasny;
		return this.kredytKwota;
		
	}

	kosztNotariusz(){
		return this.cenaZakupu*0.03;
	}

	rataKredytu(){

		let oprocentowanie = (this.oprocentowanieWibor + this.marzaBanku)/100;
		let q = Math.pow(1 + oprocentowanie/12, this.miesiaceKredytu);
		let rata = this.kredytKwota * q * ((1 + oprocentowanie/12 - 1) / (q-1));

		return rata.toFixed(2);
		// return miesiaceKredytu;

	}




}