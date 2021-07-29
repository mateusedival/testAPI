import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
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

const DriverModel = mongoose.model("Driver", driverSchema);

export { DriverModel };