import { Request, Response } from "express";
import { CreateManagerService } from "./CreateManagerService";


class CreateManagerController {
    async handle(request: Request, response: Response) {
        const {name, email, password} = request.body;

        if(!name) {
            throw new Error("Invalid name");
        }

        if(!email) {
            throw new Error("Invalid email");
        }

        if(!password) {
            throw new Error("Invalid password");
        }

        const createManagerService = new CreateManagerService();

        const manager = await createManagerService.execute({name,email,password});
        
        return response.status(201).json(manager);
    }
}

export { CreateManagerController }