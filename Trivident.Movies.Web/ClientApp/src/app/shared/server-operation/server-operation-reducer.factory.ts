import { Action } from '@ngrx/store';
import { IServerOperation } from './server-operation.interface';
import { IServerOperationErrorAction } from './server-operation-error-action.interface';

const initialState: IServerOperation = {
  isActive: false,
  succeeded: undefined,
  error: undefined
};

export const createServerOperationReducer = (requestAction: string, successAction: string, errorAction: string,
  ...resetActions: string[]) => {

  return (state: IServerOperation = initialState, action: Action): IServerOperation => {
    switch (action.type) {
      case requestAction:
        return {
          isActive: true,
          succeeded: undefined,
          error: undefined
        };
      case successAction:
        return {
          isActive: false,
          succeeded: true,
          error: undefined
        };
      case errorAction:
        const error = action as IServerOperationErrorAction;

        return {
          isActive: false,
          succeeded: false,
          error: {
            isValidationError: error.payload.httpError ? error.payload.httpError.status === 400 : false,
            httpError: error.payload.httpError
          }
        };
      default:
        if (resetActions && resetActions.indexOf(action.type) !== -1) {
          return { ...initialState };
        }
        return state;
    }
  };
};
