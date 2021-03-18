export interface ErrorItemInterface {
  type: string;
  text: string;
}

export interface ErrorInterface {
  message: string;
  errors: ErrorItemInterface[];
}

export interface ErrorDataInterface {
  headers: any;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: ErrorInterface;
}
