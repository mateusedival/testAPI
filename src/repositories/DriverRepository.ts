import mongoose from "mongoose";
import { Driver } from "../entities/Driver";
import { DriverModel } from '../models/DriverModel';

class DriverRepository {
    async create(driver: Driver){
       return DriverModel.create(driver);
    }

    async findAll(): Promise<Driver[]>{
        return DriverModel.find({});
    }

    async findByEmail(email: string): Promise<Driver> {
        return DriverModel.findOne({ email });
    }


}

export { DriverRepository };