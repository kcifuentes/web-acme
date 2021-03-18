import {CityModel} from '@app/store/city';
import {DocumentTypeModel} from '@app/store/document-type';
import {ProfileInterface} from '@app/store/profile';
import {ProfileTypeInterface} from '@app/store/profile-type';

export class ProfileModel {
  id: string;
  firstName: string;
  middleName: string;
  lastNames: string;
  documentType: DocumentTypeModel;
  documentNumber: string;
  address: string;
  phone: string;
  city: CityModel;
  profileType: ProfileTypeInterface;

  constructor(profile: ProfileInterface) {
    this.id = profile.id;
    this.firstName = profile.first_name;
    this.middleName = profile.middle_name;
    this.lastNames = profile.last_names;
    this.documentType = new DocumentTypeModel(profile.document_type);
    this.documentNumber = profile.document_number;
    this.address = profile.address;
    this.phone = profile.phone;
    this.city = new CityModel(profile.city);
    this.profileType = profile.profile_type;
  }

  get documentTypeName() {
    return this.documentType.name;
  }

  get cityName() {
    return this.city.name;
  }
}
