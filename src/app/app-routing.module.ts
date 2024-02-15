import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { FormComponent } from './form/form.component';

// app-routing.module.ts
const routes: Routes = [
  { path: "entries", component: EntriesComponent},
  {path: "forms",component:FormComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
