import { Address } from "..";
import { Status } from "../enums";

interface Order {
    readonly _id?: mongoose.Types.ObjectId;

    to: Address;

    from: Address;
    
    status?: Status;
}

export { Order }