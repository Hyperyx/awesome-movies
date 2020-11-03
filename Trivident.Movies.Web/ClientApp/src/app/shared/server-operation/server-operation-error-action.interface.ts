import { HttpErrorResponse } from '@angular/common/http';

export interface IServerOperationErrorAction {
    type: string;
    payload: {
        httpError?: HttpErrorResponse;
    };
}
