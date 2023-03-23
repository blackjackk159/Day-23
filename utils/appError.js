class appError extends Error {
  constructor(message, statusCode) {
    super(message);
    //Http Error Code 4xx: client error, 5xx: server error
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

module.exports = appError;
