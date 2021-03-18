import {DocumentTypeInterface} from '@app/store/document-type';

export class DocumentTypeModel {
  id: number;
  name: string;

  constructor(documentType: DocumentTypeInterface) {
    this.id = documentType.id;
    this.name = documentType.name;
  }
}
