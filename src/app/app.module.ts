import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { Pipe1Pipe } from './pipe1.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FilterPipe, Pipe1Pipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
