import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { KosztyPierwotnyComponent } from './koszty-pierwotny/koszty-pierwotny.component';
import { KosztyWtornyComponent } from './koszty-wtorny/koszty-wtorny.component';

@NgModule({
  declarations: [
    AppComponent,
    KosztyPierwotnyComponent,
    KosztyWtornyComponent
  ],
  imports: [
    BrowserModule,
 	  FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
