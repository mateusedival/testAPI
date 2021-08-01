import mongoose from "mongoose";
import { Manager } from "../@types/Manager";

//Ver se é melhor implementar uma unica classe User com campo de admin ou não
//A principio os dois foram separados pois acessam sistemas diferentes

const managerSchema = new mongoose.Schema<Manager>({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
},
{
    timestamps: true
});

const ManagerModel = mongoose.model("Manager", managerSchema);

export { ManagerModel };