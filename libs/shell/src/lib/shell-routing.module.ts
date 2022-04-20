import { IsAuthenticatedGuard, IsNotAuthenticatedGuard } from './guards';
import { LoginComponent, MainComponent } from './pages';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellMainRoutes } from '@types';

const routes: Routes = [
  {
    path: ShellMainRoutes.LOGIN,
    component: LoginComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: '',
    component: MainComponent,
    canActivateChild: [IsAuthenticatedGuard],
    children: [
      {
        path: ShellMainRoutes.DASHBOARD,
        loadChildren: () => import('@dashboard').then((m) => m.DashboardModule),
      },
      {
        path: '',
        redirectTo: ShellMainRoutes.DASHBOARD,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
