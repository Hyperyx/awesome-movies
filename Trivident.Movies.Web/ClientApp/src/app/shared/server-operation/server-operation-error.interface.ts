import { HttpErrorResponse } from '@angular/common/http';

export interface IServerOperationError {
    isValidationError: boolean;
    httpError?: HttpErrorResponse;
}
