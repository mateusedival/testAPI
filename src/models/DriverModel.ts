import mongoose from 'mongoose';
const { Schema } = mongoose;

const driverSchema = new Schema({
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

const DriverModel = mongoose.model("Driver", driverSchema);

export { DriverModel };