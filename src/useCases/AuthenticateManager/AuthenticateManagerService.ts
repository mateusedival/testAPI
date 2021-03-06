import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IncorrectLoginError } from "../../errors/User";
import { ManagerRepository } from "../../repositories/ManagerRepository";
import { AuthenticateManagerDTO } from "./AuthenticateManagerDTO";


class AuthenticateManagerService {
    async execute({email, password}: AuthenticateManagerDTO) {
        const managerRepository = new ManagerRepository();

        const manager = await managerRepository.findByEmail(email);

        //Manager doesn't exist
        if(!manager) {
            throw new IncorrectLoginError();
        }

        const passwordMatch = await compare(password, manager.password);

        if(!passwordMatch) {
            throw new IncorrectLoginError();
        }

        const token = sign(
            {
                email: manager.email,
            },
            "4281ea352ff8dbedf07b2f08d960fc05",
            {
                subject: manager._id?.toString(),
                expiresIn: "1d"
            }            
        );

        return token;
    }
}

export { AuthenticateManagerService };