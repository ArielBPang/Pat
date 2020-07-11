import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingsComponent } from './things/things.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
   // {path: '', redirectTo: '/products',pathMatch: 'full'},
   {path: '', component: ShowComponent},
   {path: 'things', component: ThingsComponent},
   {path: 'thing/new', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
