import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { D3Service, D3_DIRECTIVES } from './services';

import { AppComponent } from './app.component';

import { GraphComponent } from './components/graph/graph.component';
import { SHARED_VISUALS } from './components';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
