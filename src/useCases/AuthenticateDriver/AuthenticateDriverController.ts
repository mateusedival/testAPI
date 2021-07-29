import { Request, Response } from "express";
import { AuthenticateDriverService } from "./AuthenticateDriverService";


class AuthenticateDriverController {
    async handle(request: Request, response: Response) {
        const { email, password} = request.body;

        const authenticateDriverService = new AuthenticateDriverService();

        const token = await authenticateDriverService.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticateDriverController }