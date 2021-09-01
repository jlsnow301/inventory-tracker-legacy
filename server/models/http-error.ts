export default class HttpError extends Error {
  status: number;

  constructor(message: string, errorCode: number) {
    super(message); // Add a message prop
    this.status = errorCode; // Adds a code property
  }
}

export const isHttpError = (err: Error) => {
  const error = err as HttpError;
  if (error.status < 300) return true;
  else return false;
};
