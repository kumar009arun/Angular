import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MathComponent } from './math/math.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { ComputerComponent } from './computer/computer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes : Routes = [
  {path: 'math', component: MathComponent},
  {path: 'physics', component: PhysicsComponent},
  {path: 'chemistry', component: ChemistryComponent},
  {path: 'computer', component: ComputerComponent},
  {path: 'search/:id/:name', component: SearchComponent},
  {path: 'category', component: CategorylistComponent},
  {path: 'category/:id', component: ProductlistComponent},
  {path: 'react', component: ReactiveformComponent},


  {path: '', redirectTo: 'math', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
