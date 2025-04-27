import { verifyToken } from "../utils/token.js";

// Middleware para sesiones (vistas)
function isLoggedInSession(req, res, next) {

    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=You+are+not+logged+in");
    }
    
    next();
}

// Middleware para APIs (token JWT)
function isLoggedInAPI(req, res, next) {

    const authorization = req.headers.authorization;
    console.log("authorization",authorization);
    if (!authorization) {
        return res.status(401).json({ error: "You are not authorised" });
    }

    const parts = authorization.split(" ");
    const token = parts.length === 2 ? parts[1] : null;

    if (!token) {
        return res.status(401).json({ error: "Invalid authorization header format" });
    }

    const result = verifyToken(token);
    if (result) {
        req.user = {
            user_id: result.user_id
        };
        next();
    } else {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        // El usuario está logueado, continuamos
        next();
    } else {
        // No está logueado, redirigimos a login
        res.redirect('/login?error=You+need+to+log+in+first');
    }
}

export default isAuthenticated;

export {
    isLoggedInSession,
    isLoggedInAPI,
};