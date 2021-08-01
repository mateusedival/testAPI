import { NextFunction, Request, Response } from "express";
import { InvalidEmailError, InvalidNameError, InvalidPasswordError } from "../../errors/User";
import { CreateDriverService } from "./CreaterDriverService";


class CreateDriverController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const { name, email, password} = request.body;

        if(!name) {
            throw new InvalidNameError();
        }

        if(!email) {
            throw new InvalidEmailError();
        }

        if(!password) {
            throw new InvalidPasswordError();
        }

        const createDriverService = new CreateDriverService();

        const driver = await createDriverService.execute({name, email, password});

        return response.status(201).json(driver);
    }
}

export { CreateDriverController }