const { ResponseError } = require('../utils/errors');

const shouldDisplayStack = error => error.statusCode !== 404 && process.env.NODE_ENV === 'development';

const errorHandler = (err, req, res, next) => {
    if(res.headersSent)
        return next(err);
    if(err instanceof ResponseError) {
        console.error(`Error ${ err.statusCode }: "${ err.statusMessage }" at ${ err.requestData.method } ${ err.requestData.url } `);
        shouldDisplayStack(err) && console.error(err.stack);
    }

    let responsePayload = {
        success: false,
        statusCode: err.statusCode,
        message: err.statusMessage,
    };

    if(shouldDisplayStack(err))
        responsePayload.stack = err.stack;

    res.status(err.statusCode ?? 500);
    res.json(responsePayload);
}

module.exports = errorHandler;