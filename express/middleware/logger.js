const logger = (req, res, next) => {
    const { method, url } = req;
    const time = new Date().toLocaleString('es-MX');
    console.log(`${ time } | Request to ${ url } using HTTP method ${ method }`);
    next();
}

module.exports = logger;