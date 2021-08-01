export enum Status {
    WAITING = "Waiting",
    ACCEPTED = "Accepted",
    FINALIZED = "Finalized",
}

export enum HTTPStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    //404 é not found
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500
}