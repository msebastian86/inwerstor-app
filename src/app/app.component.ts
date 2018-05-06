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
	kwotaKredytu: number = 0;
	wkladWlasny: number = 0;
	prowizjaBanku: number = 0;
	marzaBanku: number = 0;
	lataKredytu: number = 0;


	constructor() {}
	ngOnInit() {}



}