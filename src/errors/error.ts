import { HTTPStatusCode } from "../@types/enums";

export class GenericError extends Error {
    readonly message: string;
    readonly code: HTTPStatusCode;
    
    constructor(message: string, code: HTTPStatusCode) {
        super();
        this.name = this.constructor.name;
        this.message = message;
        this.code = code;
    }
}
















