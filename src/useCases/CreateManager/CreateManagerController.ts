import { Request, Response } from "express";
import { InvalidEmailError, InvalidNameError, InvalidPasswordError } from "../../errors/User";
import { CreateManagerService } from "./CreateManagerService";


class CreateManagerController {
    async handle(request: Request, response: Response) {
        const {name, email, password} = request.body;

        if(!name) {
            throw new InvalidNameError();
        }

        if(!email) {
            throw new InvalidEmailError();
        }

        if(!password) {
            throw new InvalidPasswordError();
        }

        const createManagerService = new CreateManagerService();

        const manager = await createManagerService.execute({name,email,password});
        
        return response.status(201).json(manager);
    }
}

export { CreateManagerController }