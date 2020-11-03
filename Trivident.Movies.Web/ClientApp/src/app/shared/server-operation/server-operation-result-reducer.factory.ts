import { Action } from '@ngrx/store';
import { IServerOperationErrorAction } from './server-operation-error-action.interface';
import { IServerOperationResultAction } from './server-operation-result-action.interface';
import { IServerOperationResult } from './server-operation-result.interface';

function getInitialState<T>(): IServerOperationResult<T> {
  return {
    data: undefined,
    error: undefined,
    isActive: false,
    succeeded: undefined
  };
}

export const createServerOperationResultReducer = <T>(requestAction: string, successAction: string, errorAction: string,
  ...resetActions: string[]) => {

  const initialState = getInitialState<T>();

  return (state: IServerOperationResult<T> = initialState, action: Action): IServerOperationResult<T> => {
    switch (action.type) {
      case requestAction:
        return {
          isActive: true,
          succeeded: undefined,
          error: undefined,
          data: undefined
        };
      case successAction:
        const success = action as IServerOperationResultAction<T>;

        return {
          isActive: false,
          succeeded: true,
          error: undefined,
          data: success.payload.data
        };
      case errorAction:
        const error = action as IServerOperationErrorAction;

        return {
          isActive: false,
          succeeded: false,
          data: undefined,
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
