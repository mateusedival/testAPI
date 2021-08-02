import { Model } from "mongoose";

export abstract class BaseRepository<T> {
    private model: Model<any>;

    
    constructor(model: Model<any>) {
        this.model = model;
    }
    
    async create(data: T): Promise<T> {
        return this.model.create(data);
    }

    async findAll(): Promise<T[]> {
        return this.model.find({},{__v: 0});
    }

    async findById(_id: string): Promise<T> {
        return this.model.findById(_id,{__v: 0});
    }
}