import {CityInterface} from '@app/store/city';
import {DocumentTypeInterface} from '@app/store/document-type';
import {ProfileTypeInterface} from '@app/store/profile-type';

export interface ProfileInterface {
  id?: string;
  first_name: string;
  middle_name: string;
  last_names: string;
  document_type: DocumentTypeInterface;
  document_number: string;
  address: string;
  phone: string;
  city: CityInterface;
  profile_type: ProfileTypeInterface;
}
