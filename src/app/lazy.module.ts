import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'load-parent', component:ParantComponent},
  {path:'load-child', component:ChildComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParantComponent, ChildComponent]
})
export class LazyModule { }
