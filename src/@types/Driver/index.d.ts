import mongoose from "mongoose";

interface Driver {
    readonly _id?: mongoose.Types.ObjectId;

    name: string;

    email: string;

    password: string;
}

export { Driver }