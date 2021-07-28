import { Driver } from "../../entities/Driver";
import { DriverRepository } from "../../repositories/DriverRepository";
import { ICreateDriver } from "./CreteDriverDTO";
import { hash } from "bcryptjs";

class CreateDriverService {
    async execute({name,email,password}: ICreateDriver) {
        const driverRepository = new DriverRepository();
        
        const driverAlreadyExists = await driverRepository.findByEmail(email);

        if(!name) {
            throw new Error("Invalid name");
        }

        if (driverAlreadyExists) {
           throw new Error("User already exist"); 
        }

        const passwordHash = await hash(password,8);

        const driver = await driverRepository.create(new Driver(name,email,passwordHash));

        return driver;
    }
}

export { CreateDriverService }