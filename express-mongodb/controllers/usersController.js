

module.exports = {
    get: async (req, res, next) => {
        try {
            res.send('ok');
        } catch(error) {
            return next(error);
        }
    }
}