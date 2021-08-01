import { Request, Response } from "express";
import { InvalidEmailError, InvalidPasswordError } from "../../errors/User";
import { AuthenticateDriverService } from "./AuthenticateDriverService";


class AuthenticateDriverController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        if(!email) {
            throw new InvalidEmailError();
        }

        if(!password) {
            throw new InvalidPasswordError();
        }

        const authenticateDriverService = new AuthenticateDriverService();

        const token = await authenticateDriverService.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticateDriverController }