import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '@app/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProfileRoutingModule {
}
