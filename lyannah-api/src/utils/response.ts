interface ResponseInterface {
  success: boolean;
  message: string;
  token: string;
  source: object;
  meta: object;
  returner: () => object;
}

export class ApiResponseObject implements ResponseInterface {
  success: boolean;
  message: string;
  source: object;
  meta: object;
  token: string;

  constructor({ success, message, data, meta, token }: any) {
    this.success = success;
    this.message = message;
    this.source = data;
    this.meta = meta;
    this.token = token;
  }

  returner = () => {
    return {
      success: this.success,
      message: this.message,
      source: JSON.stringify(this.source) === "{}" ? undefined : this.source,
      meta: JSON.stringify(this.meta) === "{}" ? undefined : this.meta,
      token: this.token === "" ? undefined : this.token,
    };
  };

  reseter = () => {
    this.source = {};
    this.meta = {};
    this.token = "";
  };
}
