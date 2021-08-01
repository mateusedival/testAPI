import { HTTPStatusCode } from "../@types/enums";
import { GenericError } from "./error";


class OrderNotFoundError extends GenericError {
    constructor() {
        super("Order not found",HTTPStatusCode.NOT_FOUND);
    }
}

class OrderAlreadyTakenError extends GenericError {
    constructor() {
        super("Order already or finished",HTTPStatusCode.FORBIDDEN);
    }
}

class InvalidAddressError extends GenericError {
    constructor() {
        super("Invalid address",HTTPStatusCode.BAD_REQUEST);
    }
}

class OrderFromAnotherDriverError extends GenericError {
    constructor() {
        super("Cannot finalize order from another driver",HTTPStatusCode.FORBIDDEN);
    }
}

class OrderNotAcceptedError extends GenericError {
    constructor() {
        super("Order not accepted or already finished",HTTPStatusCode.BAD_REQUEST);
    }
}

export { OrderAlreadyTakenError, OrderNotFoundError, OrderNotAcceptedError, OrderFromAnotherDriverError, InvalidAddressError }