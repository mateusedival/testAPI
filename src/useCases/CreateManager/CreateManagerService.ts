import { hash } from "bcryptjs";
import { ManagerRepository } from "../../repositories/ManagerRepository";
import { CreateDriverDTO } from "../CreateDriver/CreteDriverDTO";


class CreateManagerService {
    async execute({name, email, password}: CreateDriverDTO) {
        if(!name) {
            throw new Error("Invalid name");
        }

        if(!email) {
            throw new Error("Invalid email");
        }

        if(!password) {
            throw new Error("Invalid password");
        }
        
        const managerRepository = new ManagerRepository()

        const managerAlreadyExists = await managerRepository.findByEmail(email);

        if (managerAlreadyExists) {
           throw new Error("User already exist"); 
        }

        const passwordHash = await hash(password,8);
        const manager = await managerRepository.create({name,email,password: passwordHash});
    
        return manager;
    }
}
export { CreateManagerService }