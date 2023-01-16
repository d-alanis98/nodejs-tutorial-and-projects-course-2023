

exports.ResponseError = class ResponseError extends Error {
    constructor({
        statusCode, 
        requestData,
        statusMessage, 
    }) {
        super(statusMessage);
        this.statusCode = statusCode;
        this.requestData = requestData;
        this.statusMessage = statusMessage;
    }
}