import mongoose from "mongoose";
import { Driver } from "../@types/Driver";
import { DriverModel } from '../models/DriverModel';
import { BaseRepository } from "./base/BaseRepository";

class DriverRepository extends BaseRepository<Driver>{
    constructor() {
        super(DriverModel);
    }

    async findByEmail(email: string): Promise<Driver> {
        return DriverModel.findOne({ email });
    }

}

export { DriverRepository };