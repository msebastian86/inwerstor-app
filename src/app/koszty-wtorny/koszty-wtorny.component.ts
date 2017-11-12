import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-koszty-wtorny',
  templateUrl: './koszty-wtorny.component.html',
  styleUrls: ['./koszty-wtorny.component.css'],
  providers: [GlobalsService]
})
export class KosztyWtornyComponent implements OnInit {

	constructor(public cena: GlobalsService) {}
	
	onUpdateData(data:number){
	  this.cena.insertData(data);
	}

	onGetData(){
	  this.cena.getData();
	}

  	ngOnInit() {
  	}

}
