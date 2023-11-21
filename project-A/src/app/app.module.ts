import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibSuva3Module } from 'lib-suva3';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibSuva3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
