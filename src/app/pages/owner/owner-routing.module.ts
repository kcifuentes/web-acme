import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerComponent} from '@app/pages/owner/owner.component';

const routes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OwnerRoutingModule {
}
