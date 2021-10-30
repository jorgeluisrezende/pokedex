import { Response, NextFunction } from "express";
import { ErrorCodes } from "../constants";
import { RequestWithId } from "../entities/RequestWithId";
import { PublicError } from "../errors/PublicError";

export function ErrorHandler(err: PublicError, req: RequestWithId, res: Response, next:NextFunction): Response{
    console.log(`[${req.id}] - `, err)

    if (err instanceof PublicError) {
        return res.status(err.statusCode || 400).json({
            type: ErrorCodes[err.code],
            ...err.JSON()
        })
    }

    return res.status(500).json({
        request_id: req.id,
        message: "Internal server error."
    });
}