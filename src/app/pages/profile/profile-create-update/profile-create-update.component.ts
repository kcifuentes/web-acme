import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CityInterface, GetAllCities, getCities} from '@app/store/city';
import {DocumentTypeInterface, GetAllDocumentTypes} from '@app/store/document-type';
import {ProfileInterface, ProfileModel, SaveProfile} from '@app/store/profile';
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
import {ToastrService} from "ngx-toastr";

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
    private toastr: ToastrService,
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
      firstName: [
        this.data.profile?.firstName || '', [Validators.required]
      ],
      middleName: [
        this.data.profile?.middleName || '', [Validators.required]
      ],
      lastNames: [
        this.data.profile?.lastNames || '', [Validators.required]
      ],
      documentType: [
        this.data.profile?.documentType || '', [Validators.required]
      ],
      documentNumber: [
        this.data.profile?.documentNumber || '', [Validators.required]
      ],
      address: [
        this.data.profile?.address || '', [Validators.required]
      ],
      city: [
        this.data.profile?.city || '', [Validators.required]
      ],
      phone: [
        this.data.profile?.phone || '', [Validators.required]
      ],
    });
  }

  save() {
    if (this.form.invalid) {
      this.toastr.error('Debe diligenciar todos los campos marcados con el asterisco (*).', 'Error');
      return;
    }

    const dataRequest: ProfileInterface = {
      first_name: this.form.get('firstName').value,
      middle_name: this.form.get('middleName').value,
      last_names: this.form.get('lastNames').value,
      document_type: this.form.get('documentType').value,
      document_number: this.form.get('documentNumber').value,
      address: this.form.get('address').value,
      city: this.form.get('city').value,
      profile_type: this.data.profileType,
      phone: this.form.get('phone').value
    };

    this.store.dispatch(new SaveProfile(dataRequest));
    this.dialogRef.close();
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
