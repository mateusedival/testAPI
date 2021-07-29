import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ManagerRepository } from "../../repositories/ManagerRepository";
import { AuthenticateManagerDTO } from "./AuthenticateManagerDTO";


class AuthenticateManagerService {
    async execute({email, password}: AuthenticateManagerDTO) {
        const managerRepository = new ManagerRepository();

        const manager = await managerRepository.findByEmail(email);

        if(!manager) {
            throw new Error("Email/password incorrect");
        }

        const passwordMatch = await compare(password, manager.password);

        if(!passwordMatch) {
            throw new Error("Email/password incorrect");
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