import mongoose from "mongoose";

//Ver se é melhor implementar uma unica classe User com campo de admin ou não
//A principio os dois foram separados pois acessam sistemas diferentes

const managerSchema = new mongoose.Schema({
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
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const ManagerModel = mongoose.model("Manager", managerSchema);

export { ManagerModel };