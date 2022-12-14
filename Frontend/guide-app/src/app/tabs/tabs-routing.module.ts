import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(
                (m) => m.AccountPageModule
              ),
          },
        ],
      },
      {
        path: 'add-review',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-review/add-review.module').then(
                (m) => m.AddReviewPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
