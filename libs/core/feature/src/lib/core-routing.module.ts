import { IsAuthenticatedGuard, IsNotAuthenticatedGuard } from './guards';
import { LoginComponent, MainComponent } from './pages';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreMainRoutes } from '@types';

const routes: Routes = [
  {
    path: CoreMainRoutes.LOGIN,
    component: LoginComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: '',
    component: MainComponent,
    canActivateChild: [IsAuthenticatedGuard],
    children: [
      {
        path: CoreMainRoutes.PLAYLIST,
        loadChildren: () =>
          import('@playlist/feature').then((m) => m.PlaylistFeatureModule),
      },
      {
        path: '',
        redirectTo: CoreMainRoutes.PLAYLIST,
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
export class CoreRoutingModule {}
