class ErrorWithStatusCode extends Error {
    constructor({
        statusCode, 
        statusMessage 
    }) {
        super(statusMessage);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
    }
}

exports.ErrorWithStatusCode = ErrorWithStatusCode;

exports.ResponseError = class ResponseError extends ErrorWithStatusCode {
    constructor({
        statusCode, 
        requestData,
        statusMessage, 
    }) {
        super({ statusCode, statusMessage });
        this.statusCode = statusCode;
        this.requestData = requestData;
        this.statusMessage = statusMessage;
    }
}

exports.InvalidModelDataError = class InvalidModelDataError extends ErrorWithStatusCode {
    constructor(invalidFields, invalidValues) {
        super({
            statusCode: 422,
            statusMessage: `Invalid parameters (${ invalidFields.join(',') }) = (${ invalidValues.join(',') })`
        });
    }
}