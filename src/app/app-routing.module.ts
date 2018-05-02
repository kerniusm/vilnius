import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ServicesComponent } from './admin/services/services.component';
import { ClassificatorComponent } from './admin/services/classificator/classificator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prisijungimas', component: LoginComponent },
  { path: 'paslaugu/valdymas', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'paslaugu/klasifikatorius', component: ClassificatorComponent, canActivate: [AuthGuard] },


  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
