import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ProfileModel} from '@app/store/profile';

import {MatDialog} from '@angular/material/dialog';
import {ProfileCreateUpdateComponent} from '@app/pages/profile/profile-create-update/profile-create-update.component';
import {ProfileTypeInterface} from '@app/store/profile-type';
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
import {fadeInUp400ms} from '@share/animations/fade-in-up.animation';
import {stagger40ms} from '@share/animations/stagger.animation';
import {TableColumn} from '@share/interfaces/table-column.interface';

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

  @Input() profileType: ProfileTypeInterface;

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

  profiles: ProfileModel[];

  constructor(private dialog: MatDialog) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
  }

  createProfile() {
    this.dialog.open(ProfileCreateUpdateComponent, {
      width: '60%',
      disableClose: true,
      data: {
        mode: 'create',
        profileType: this.profileType
      }
    }).afterClosed().subscribe((profile: ProfileModel) => {
      if (profile) {
        // Todo Dispatch Save Profile Action
      }
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
