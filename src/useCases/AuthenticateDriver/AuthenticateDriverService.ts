import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { DriverRepository } from "../../repositories/DriverRepository";
import { AuthenticateDriverDTO } from "./AuthenticateDriverDTO";



class AuthenticateDriverService {
    async execute({email, password}: AuthenticateDriverDTO) {
        const driverRepository = new DriverRepository();

        const driver = await driverRepository.findByEmail(email);

        //Driver doesn't exist
        if(!driver) {
            throw new Error("Email/password incorrect");
        }

        const passwordMatch = await compare(password, driver.password);

        if(!passwordMatch) {
            throw new Error("Email/password incorrect");
        }

        const token = sign(
            {
                email: driver.email,
            },
            "4281ea352ff8dbedf07b2f08d960fc05",
            {
                subject: driver._id?.toString(),
                expiresIn: "1d"
            }            
        );

        return token;
    }
}

export { AuthenticateDriverService} 