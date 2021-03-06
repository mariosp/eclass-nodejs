import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {TokenGuard} from "./services/token.guard";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>import('./pages/home/home.module').then(mod => mod.HomeModule),
    canActivate: [TokenGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
