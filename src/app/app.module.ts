import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { D3Service, D3_DIRECTIVES } from './services';

import { AppComponent } from './app.component';

import { GraphComponent } from './components/graph/graph.component';
import { SHARED_VISUALS } from './components';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }