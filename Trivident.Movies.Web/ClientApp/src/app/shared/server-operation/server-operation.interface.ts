import { IServerOperationError } from './server-operation-error.interface';

export interface IServerOperation {
    isActive: boolean;
    succeeded?: boolean;
    error?: IServerOperationError;
}
