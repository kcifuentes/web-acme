import {DocumentTypeInterface} from '@app/store/document-type/interfaces/document-type.interface';

export enum DocumentTypeActionTypes {
  GET_ALL_DOCUMENT_TYPES = '[DocumentType] Attempt to get list DocumentTypes from API',
  GET_ALL_DOCUMENT_TYPES_SUCCESS = '[DocumentType] Get list of DocumentTypes from API',
}

export class GetAllDocumentTypes {
  readonly type = DocumentTypeActionTypes.GET_ALL_DOCUMENT_TYPES;

  constructor() {
  }
}

export class GetAllDocumentTypesSuccess {
  readonly type = DocumentTypeActionTypes.GET_ALL_DOCUMENT_TYPES_SUCCESS;

  constructor(public response: DocumentTypeInterface[]) {
  }
}


export type DocumentTypeAction =
  GetAllDocumentTypes |
  GetAllDocumentTypesSuccess;
