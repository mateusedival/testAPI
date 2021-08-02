import { Driver } from "../../@types/Driver";
import { DriverRepository } from "../../repositories/DriverRepository";
import { CreateDriverDTO } from "./CreteDriverDTO";
import { hash } from "bcryptjs";
import { UserAlreadyExistError } from "../../errors/User";

class CreateDriverService {
    async execute({name,email,password}: CreateDriverDTO) {
        
        const driverRepository = new DriverRepository();
        
        const driverAlreadyExists = await driverRepository.findByEmail(email);

        if (driverAlreadyExists) {
           throw new UserAlreadyExistError(); 
        }

        const passwordHash = await hash(password,8);

        const driver = await driverRepository.create({name,email, password: passwordHash});
    
        return driver;
    }
}

export { CreateDriverService }