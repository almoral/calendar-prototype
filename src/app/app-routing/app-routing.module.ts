import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "../events/events.component";
import {TestViewComponent} from "../test-view/test-view.component";

const routes: Routes = [
  {path: '', redirectTo: 'events', pathMatch: 'full' },
  {path: 'events', component: EventsComponent},
  {path: 'test-view', component: TestViewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
