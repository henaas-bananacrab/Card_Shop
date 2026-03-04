const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({success: false, message: 'Access token is required'});
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({success: false, message: 'Invalid access token'});
        }

        req.user = user;
        next();
    });
}

function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.Roles)) {
            return res.status(403).json({success: false, message: 'Access denied'});
        }
        next();
    };
}

module.exports = {
    authenticateToken,
    authorizeRoles
};