import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalsService } from '../globals.service';


@Component({
  selector: 'app-koszty-pierwotny',
  templateUrl: './koszty-pierwotny.component.html',
  styleUrls: ['./koszty-pierwotny.component.css'],
  providers: [GlobalsService]
})


export class KosztyPierwotnyComponent implements OnInit {

	cos:number;

	constructor(public cena: GlobalsService) {}
	
	onUpdateData(data:number){
	  this.cena.insertData(data);
	}

	onGetData(){
	  this.cena.getData();
	}



  	ngOnInit() {}

}
