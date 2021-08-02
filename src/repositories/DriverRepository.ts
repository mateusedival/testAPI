import mongoose from "mongoose";
import { Driver } from "../@types/Driver";
import { DriverModel } from '../models/DriverModel';
import { BaseRepository } from "./base/BaseRepository";

class DriverRepository extends BaseRepository<Driver>{
    constructor() {
        super(DriverModel);
    }

    override async  findAll() {
        return DriverModel.find({},{password: 0, __v: 0})
    }

    async findByEmail(email: string) {
        return DriverModel.findOne({ email },{__v: 0}).lean();
    }

}

export { DriverRepository };