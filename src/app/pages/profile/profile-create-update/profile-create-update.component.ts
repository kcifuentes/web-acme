import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CityInterface, GetAllCities, getCities} from '@app/store/city';
import {DocumentTypeInterface, GetAllDocumentTypes} from '@app/store/document-type';
import {ProfileModel} from '@app/store/profile';
import {ProfileTypeInterface} from '@app/store/profile-type';
import {State} from '@app/store/reducer';
import {getProfileTypeName, isNullOrUndefined} from '@app/utils';
import icUserIdentification from '@iconify/icons-bx/bxs-user-badge';
import icClose from '@iconify/icons-ic/twotone-close';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icPerson from '@iconify/icons-ic/twotone-person';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPrint from '@iconify/icons-ic/twotone-print';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import {getDocumentTypes} from "@app/store/document-type/document-type.selectors";

export interface DialogData {
  mode: 'create' | 'update';
  profileType: ProfileTypeInterface;
  profile?: ProfileModel;
}

@Component({
  selector: 'acme-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.scss']
})
export class ProfileCreateUpdateComponent implements OnInit {
  cities$: Observable<CityInterface[]> = this.store.select(getCities).pipe(delay(0));
  documentTypes$: Observable<DocumentTypeInterface[]> = this.store.select(getDocumentTypes).pipe(delay(0));

  id = 1;
  mode: 'create' | 'update' = 'create';
  form: FormGroup;
  cities: CityInterface[];
  documentTypes: DocumentTypeInterface[];

  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  icUserIdentification = icUserIdentification;

  getProfileTypeName = getProfileTypeName;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<State>,
    private dialogRef: MatDialogRef<ProfileCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.mode = this.data.mode;

    this.cities$.subscribe((cities: CityInterface[]) => {
      if (isNullOrUndefined(cities) || cities.length <= 0) {
        this.store.dispatch(new GetAllCities());
      } else {
        this.cities = cities;
      }
    });

    this.documentTypes$.subscribe((documentTypes: DocumentTypeInterface[]) => {
      if (isNullOrUndefined(documentTypes) || documentTypes.length <= 0) {
        this.store.dispatch(new GetAllDocumentTypes());
      } else {
        this.documentTypes = documentTypes;
      }
    });

    this.form = this.fb.group({
      id: [this.data.profile?.id || ''],
      firstName: [this.data.profile?.firstName || ''],
      middleName: this.data.profile?.middleName || '',
      lastNames: [this.data.profile?.lastNames || ''],
      documentType: this.data.profile?.documentType || '',
      documentNumber: this.data.profile?.documentNumber || '',
      address: this.data.profile?.address || '',
      city: this.data.profile?.city || '',
      phone: this.data.profile?.phone || '',
    });
  }

  save() {
    if (this.form.invalid) {

    }
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  getCityName(citySelected: CityInterface) {
    return citySelected.name;
  }

  getDocumentTypeName(documentType: DocumentTypeInterface) {
    return documentType.name;
  }
}
