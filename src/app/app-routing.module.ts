import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DosComponent} from './components/dos/dos.component';
import { patchComponentDefWithScope } from '@angular/core/src/render3/jit/module';

const routes: Routes = [

{path:'dos', component:DosComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
