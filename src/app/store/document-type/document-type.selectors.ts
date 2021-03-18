import {
  DocumentTypeState,
  getDocumentTypesReducer,
  isLoadingReducer
} from '@app/store/document-type/document-type.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getDocumentTypeState = createFeatureSelector<DocumentTypeState>('documentTypes');

export const getDocumentTypes = createSelector(getDocumentTypeState, getDocumentTypesReducer);
export const isLoading = createSelector(getDocumentTypeState, isLoadingReducer);
