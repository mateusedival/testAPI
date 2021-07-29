import { Request, Response } from "express";
import { CreateManagerService } from "./CreateManagerService";


class CreateManagerController {
    async handle(request: Request, response: Response) {
        const {name, email, password} = request.body;

        const createManagerService = new CreateManagerService();

        const manager = await createManagerService.execute({name,email,password});
        
        return response.status(201).json(manager);
    }
}

export { CreateManagerController }