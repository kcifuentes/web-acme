import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {GetAllProfiles, ProfileInterface, ProfileModel} from '@app/store/profile';

import {MatDialog} from '@angular/material/dialog';
import {ProfileCreateUpdateComponent} from '@app/pages/profile/profile-create-update/profile-create-update.component';
import {ProfileTypeInterface} from '@app/store/profile-type';
import {profilesData} from '@app/store/profile/profile.selectors';
import {State} from '@app/store/reducer';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icSearch from '@iconify/icons-ic/twotone-search';
import {Store} from '@ngrx/store';
import {fadeInUp400ms} from '@share/animations/fade-in-up.animation';
import {stagger40ms} from '@share/animations/stagger.animation';
import {TableColumn} from '@share/interfaces/table-column.interface';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Observable, of, ReplaySubject} from 'rxjs';
import {delay, filter} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'acme-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  profiles$: Observable<ProfileInterface[]> = this.store.select(profilesData).pipe(delay(0));
  subject$: ReplaySubject<ProfileModel[]> = new ReplaySubject<ProfileModel[]>(1);
  data$: Observable<ProfileModel[]> = this.subject$.asObservable();

  profiles: ProfileModel[];

  searchCtrl = new FormControl();
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  dataSource: MatTableDataSource<ProfileModel> | null;

  columns: TableColumn<ProfileModel>[] = [
    {label: 'Primer Nombre', property: 'firstName', type: 'text', visible: true, cssClasses: ['font-medium']},
    {label: 'Segundo Nombre', property: 'middleName', type: 'text', visible: true, cssClasses: ['font-medium']},
    {label: 'Apellidos', property: 'lastNames', type: 'text', visible: true, cssClasses: ['font-medium']},
    {label: 'Tipo de Documento', property: 'documentTypeName', type: 'text', visible: true},
    {label: 'Dirección', property: 'address', type: 'text', visible: true},
    {label: 'Ciudad', property: 'cityName', type: 'text', visible: true},
    {label: 'Teléfono', property: 'phone', type: 'text', visible: true},
    {label: 'Actions', property: 'actions', type: 'button', visible: true}
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  constructor(private dialog: MatDialog, private store: Store<State>) {
    this.profiles$.subscribe((profiles: ProfileInterface[]) => {
      if (isNotNullOrUndefined(profiles) && profiles.length > 0) {
        this.getProfilesData(profiles).subscribe(customers => {
          this.subject$.next(customers);
        });
      }
    });
  }

  _profileType: ProfileTypeInterface;

  @Input()
  set profileType(val: ProfileTypeInterface) {
    if (isNotNullOrUndefined(val)) {
      this._profileType = val;
      this.store.dispatch(
        new GetAllProfiles({
          profileTypeId: val.id
        })
      );
    }
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();

    this.profiles$.pipe(
      filter<ProfileInterface[]>(Boolean)
    ).subscribe(profiles => {
      this.profiles = profiles.map((item) => new ProfileModel(item));
      this.dataSource.data = this.profiles;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  getProfilesData(profiles: ProfileInterface[]) {
    return of(profiles.map(profile => new ProfileModel(profile)));
  }

  createProfile() {
    this.dialog.open(ProfileCreateUpdateComponent, {
      width: '60%',
      disableClose: true,
      data: {
        mode: 'create',
        profileType: this._profileType
      }
    }).afterClosed().subscribe((profile: ProfileModel) => {
    });
  }

  updateProfile(profile: ProfileModel) {

  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  deleteProfile(profile: ProfileModel) {
  }
}
