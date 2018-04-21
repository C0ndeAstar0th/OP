import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { Guard } from './guard/guard';
import { Guard2 } from './guard/guard2';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [Guard]},
  { path: 'home2/:bod', component: HomeComponent, canActivate: [Guard] },
  { path: 'home3/:bod', component: HomeComponent, canActivate: [Guard] },
  { path: 'login', component: LoginComponent, canActivate: [Guard2] },
  { path: 'adminUsers', component: RegisterComponent },
  { path: '**', redirectTo: '/login'},
];

export const Routing = RouterModule.forRoot(routes);
