import { HTTPStatusCode } from "../@types/enums";
import { GenericError } from "./error";

class InvalidEmailError extends GenericError {
    constructor() {
        super("Invalid Email",HTTPStatusCode.BAD_REQUEST);
    }
}

class InvalidNameError extends GenericError {
    constructor() {
        super("Invalid name",HTTPStatusCode.BAD_REQUEST);
    }
}

class InvalidPasswordError extends GenericError {
    constructor() {
        super("Invalid password",HTTPStatusCode.BAD_REQUEST);
    }
}

class InvalidIdError extends GenericError {
    constructor() {
        super("Invalid Id",HTTPStatusCode.BAD_REQUEST);
    }
}

class IncorrectLoginError extends GenericError {
    constructor() {
        super("Email or password incorrect",HTTPStatusCode.BAD_REQUEST);
    }
}

class UserAlreadyExistError extends GenericError {
    constructor() {
        super("User already exists",HTTPStatusCode.BAD_REQUEST);
    }
}

export { InvalidEmailError, InvalidIdError, InvalidPasswordError, InvalidNameError, IncorrectLoginError, UserAlreadyExistError }