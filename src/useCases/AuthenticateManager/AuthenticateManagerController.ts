import { Request, Response } from "express";
import { AuthenticateManagerService } from "./AuthenticateManagerService";


class AuthenticateManagerController {
    async handle(request: Request, response: Response) {
        const { email, password} = request.body;

        const authenticateManagerService = new AuthenticateManagerService();

        const token = await authenticateManagerService.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticateManagerController }