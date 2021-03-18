import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '@app/pages/owner/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ListRoutingModule {
}
