import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { D3Service, D3_DIRECTIVES } from './services';

import { AppComponent } from './app.component';

import { GraphComponent } from './components/editor/graph/graph.component';
import { SHARED_VISUALS } from './components';
import { ModalComponent } from './components/editor/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './components/editor/side-nav/side-nav.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { EditComponent } from './components/editor/edit/edit.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/home/card/card.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    ModalComponent,
    SideNavComponent,
    LandingComponent,
    EditComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
