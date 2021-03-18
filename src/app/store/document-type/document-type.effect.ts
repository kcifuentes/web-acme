import {Injectable} from '@angular/core';
import {
  DocumentTypeActionTypes,
  GetAllDocumentTypes,
  GetAllDocumentTypesSuccess
} from '@app/store/document-type/document-type.action';
import {DocumentTypeService} from '@app/store/document-type/document-type.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class DocumentTypeEffect {
  GetAllDocumentTypes$ = createEffect(() => this.actions$.pipe(
    ofType(DocumentTypeActionTypes.GET_ALL_DOCUMENT_TYPES),
    map((action: GetAllDocumentTypes) => action),
    mergeMap(() => {
      return this.documentTypeService.getAllDocumentTypes().pipe(
        mergeMap((response: any) => {
          return [
            new GetAllDocumentTypesSuccess(response)
          ];
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private documentTypeService: DocumentTypeService
  ) {
  }
}
