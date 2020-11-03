import { IServerOperation } from './server-operation.interface';

export interface IServerOperationResult<T> extends IServerOperation {
    data?: T;
}
