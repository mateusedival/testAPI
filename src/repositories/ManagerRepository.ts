import { Manager } from "../@types/Manager";
import { ManagerModel } from "../models/ManagerModel";
import { BaseRepository } from "./base/BaseRepository";

class ManagerRepository extends BaseRepository<Manager>{
    constructor () {
        super(ManagerModel);
    }
 
    async findByEmail(email: string): Promise<Manager> {
         return ManagerModel.findOne({ email });
     }
}

export { ManagerRepository };