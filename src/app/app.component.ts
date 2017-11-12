import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { KosztyPierwotnyComponent } from './koszty-pierwotny/koszty-pierwotny.component';
import { GlobalsService } from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalsService]
})


export class AppComponent {

	title = 'Investor App';
  cenaZakupu: number = 9;
	// data: number = 2;

  constructor(public cena: GlobalsService) {}
  
  onUpdateData(data:number){
    this.cena.insertData(data);
  }

  onGetData(){
    this.cena.getData();
  }


  ngOnInit() {}




  // inwestycjaDane = [
  //   new InwestycjaDane(1000, 10),
  //   new InwestycjaDane(24000, 40)
  // ];

}