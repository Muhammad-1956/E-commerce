import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { controlsGuard } from './core/guards/controls.guard';

const routes: Routes = [
{
  path: '',
  loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  canActivate:[controlsGuard],
  path: 'features',
  loadChildren:() => import('./features/features.module').then(m => m.FeaturesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
