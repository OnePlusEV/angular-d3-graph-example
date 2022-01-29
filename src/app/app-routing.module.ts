import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {EditComponent} from './components/edit/edit.component';

const routes: Routes = [
  {path: '', component: LandingComponent, pathMatch: 'full'},
  {path: 'edit', component: EditComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
