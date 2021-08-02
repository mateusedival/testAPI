import { Manager } from "../@types/Manager";
import { ManagerModel } from "../models/ManagerModel";
import { BaseRepository } from "./base/BaseRepository";

class ManagerRepository extends BaseRepository<Manager>{
    constructor () {
        super(ManagerModel);
    }
 
    override async findAll() {
        return ManagerModel.find({},{password: 0, __v: 0})
    }

    async findByEmail(email: string) {
        return ManagerModel.findOne({ email },{__v: 0}).lean();
    }
}

export { ManagerRepository };