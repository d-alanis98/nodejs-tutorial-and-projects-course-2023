

const endpointNotFound = (req, res) => {
    if(req.headers?.accept?.includes('text/html'))
        return res.status(404).send('<h1>Resource not found</h1>');
    res.status(404).send({
        success: false,
        statusCode: 404,
        message: `Resource ${ req.url } not found`,
    });
};

module.exports = endpointNotFound;