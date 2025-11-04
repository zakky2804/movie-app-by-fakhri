export interface IErrorInvalidAPIKey {
  status_code: number;
  status_message: string;
  success: boolean;
}

export interface INotFound {
  success: boolean;
  status_code: number;
  status_message: string;
}
