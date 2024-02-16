import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HeaderComponent, pathMatch: 'full' },
  {path: 'home',component:HeaderComponent},
  { path: "entries", component: EntriesComponent},
  {path: "forms",component:FormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
