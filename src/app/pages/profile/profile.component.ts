import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {
  GetAllProfileTypes,
  ProfileTypeInterface,
  profileTypesSelector,
  ProfileTypeState
} from '@app/store/profile-type';
import {getProfileTypeName, isNullOrUndefined} from '@app/utils';
import {Store} from '@ngrx/store';


@Component({
  selector: 'acme-owner',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  layoutCtrl = new FormControl('boxed');
  profileType: ProfileTypeInterface;
  routeData: string;

  getProfileTypeName = getProfileTypeName;

  constructor(private store: Store<ProfileTypeState>, private route: ActivatedRoute) {
    this.route.data.subscribe((v: { profileType: string }) => {
      this.routeData = v.profileType;
    });
  }

  ngOnInit(): void {
    this.store.select(profileTypesSelector).pipe().subscribe((profileTypes: ProfileTypeInterface[]) => {
      if (isNullOrUndefined(profileTypes) || profileTypes.length <= 0) {
        this.store.dispatch(new GetAllProfileTypes());
      } else {
        this.profileType = profileTypes.filter((profileType: ProfileTypeInterface) => profileType.name === this.routeData)[0];
      }
    });
  }
}
