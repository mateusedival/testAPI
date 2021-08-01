import { Request, Response } from "express";
import { InvalidEmailError, InvalidPasswordError } from "../../errors/User";
import { AuthenticateManagerService } from "./AuthenticateManagerService";


class AuthenticateManagerController {
    async handle(request: Request, response: Response) {
        const { email, password} = request.body;

        if(!password) {
            throw new InvalidPasswordError();
        }

        if(!email) {
            throw new InvalidEmailError();
        }

        const authenticateManagerService = new AuthenticateManagerService();

        const token = await authenticateManagerService.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticateManagerController }