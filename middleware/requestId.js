const { v4: uuidv4 } = require('uuid');

function requestIdMiddleware(req, res, next) {
    req.requestId = req.headers['x-request-id'] || uuidv4();
    res.setHeader('x-request-id', req.requestId);
    next();
}

module.exports = requestIdMiddleware;