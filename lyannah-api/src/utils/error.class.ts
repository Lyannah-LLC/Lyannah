interface ResponseError extends Error {
  status?: number;
}

export = ResponseError;
