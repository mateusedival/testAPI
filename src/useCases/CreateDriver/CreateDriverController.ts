import { Request, Response } from "express";
import { CreateDriverService } from "./CreaterDriverService";


class CreateDriverController {
    async handle(request: Request, response: Response) {
        const { name, email, password} = request.body;

        if(!name) {
            throw new Error("Invalid name");
        }

        if(!email) {
            throw new Error("Invalid email");
        }

        if(!password) {
            throw new Error("Invalid password");
        }

        const createDriverService = new CreateDriverService();

        const driver = await createDriverService.execute({name, email, password});

        return response.status(201).json(driver);
    }
}

export { CreateDriverController }