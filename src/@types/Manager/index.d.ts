import mongoose from "mongoose";

interface Manager {
    readonly _id?: mongoose.Types.ObjectId;
    
    name: string;

    email: string;

    password: string;


}

export { Manager }