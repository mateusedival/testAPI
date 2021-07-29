import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAutheticated(request: Request, response: Response, nextFunction: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
    

    try {
        const { sub } = verify(token, "4281ea352ff8dbedf07b2f08d960fc05") as IPayload;

        request.user_id = sub;
       
    } catch(err) {
        return response.status(401).end();
    }

    return nextFunction();
}