export default class HttpError extends Error {
  code: number;

  constructor(message: string, errorCode: number) {
    super(message); // Add a message prop
    this.code = errorCode; // Adds a code property
  }
}
