import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {ProfileCreateUpdateComponent} from '@app/pages/profile/profile-create-update/profile-create-update.component';
import {IconModule} from '@visurel/iconify-angular';


@NgModule({
  declarations: [ProfileCreateUpdateComponent],
  entryComponents: [ProfileCreateUpdateComponent],
  exports: [ProfileCreateUpdateComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    IconModule,
    FlexLayoutModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
})
export class ProfileCreateUpdateModule {
}
