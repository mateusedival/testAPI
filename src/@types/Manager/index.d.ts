import mongoose from "mongoose";

//Manager seria o gerente
interface Manager {
    readonly _id?: mongoose.Types.ObjectId;
    
    name: string;

    email: string;

    password?: string;


}

export { Manager }