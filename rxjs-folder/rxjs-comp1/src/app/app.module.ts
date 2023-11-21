import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibSuva3Module } from 'lib-suva3';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [AppComponent, Comp1Component],
  imports: [BrowserModule, LibSuva3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
