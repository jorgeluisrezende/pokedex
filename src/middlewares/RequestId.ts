import { Response, NextFunction } from "express";
import { v4 } from 'uuid'
import { RequestWithId } from "../entities/RequestWithId";

export function RequestId(req: RequestWithId, res: Response, next: NextFunction) {
    req.id = v4()
    next()
}