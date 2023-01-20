import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CreationCompte } from './component/signIn/signIn.component';
import { TachesComponent } from './component/taches/taches.component';
import { IsSignedInGuard } from './is-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'taches',
    component: TachesComponent,
    canActivate: [IsSignedInGuard]

  },
  {
    path:'signIn',
    component:CreationCompte
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
