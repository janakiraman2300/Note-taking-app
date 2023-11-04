import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const requiresAuth: RequestHandler = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        // next(createHttpError(401, "User not authenticated"));
        res.status(401).send({data:"User not authorized"})
    }
};