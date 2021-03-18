import {DocumentTypeAction, DocumentTypeActionTypes} from '@app/store/document-type/document-type.action';
import {DocumentTypeInterface} from '@app/store/document-type/interfaces/document-type.interface';
import {CallLoadingState, LoadingState} from '@app/utils';

export interface DocumentTypeState {
  data: DocumentTypeInterface[];
  callLoadingState: CallLoadingState;
}

export const initialState: DocumentTypeState = {
  data: [],
  callLoadingState: LoadingState.INIT
};

export function documentTypeReducer(state: DocumentTypeState = initialState, action: DocumentTypeAction): DocumentTypeState {
  switch (action.type) {
    case DocumentTypeActionTypes.GET_ALL_DOCUMENT_TYPES: {
      return {
        ...state,
        callLoadingState: LoadingState.LOADING
      };
    }
    case DocumentTypeActionTypes.GET_ALL_DOCUMENT_TYPES_SUCCESS: {
      return {
        ...state,
        data: action.response,
        callLoadingState: LoadingState.LOADED
      };
    }
    default: {
      return state;
    }
  }
}

export const isLoadingReducer = (state: DocumentTypeState) => state.callLoadingState === LoadingState.LOADING;
export const getDocumentTypesReducer = (state: DocumentTypeState) => state.data;
