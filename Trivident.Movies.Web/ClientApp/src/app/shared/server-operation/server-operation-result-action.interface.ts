export interface IServerOperationResultAction<T> {
  type: string;
  payload: {
      data?: T;
  };
}
