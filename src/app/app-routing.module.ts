import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
   {path: '', redirectTo: 'login', pathMatch:'full'},
   {path: 'login', component:LoginComponent},
   {path: 'signup', component:SignupComponent},
   {path: 'todo', component:TodoComponent},];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}